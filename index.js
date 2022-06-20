const canvas = document.querySelector('canvas')
const mapContainer = document.querySelector('[data-map-container]')
const ctx = canvas.getContext('2d')

const WORLD_WIDTH = 16
const WORLD_HEIGHT = 9

canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', drawMap)
window.addEventListener('resize', setPixelToWorldScale)

const map = new Image()
map.src = './assets/map/mapa.png'

const playerImage = new Image()
playerImage.src = './assets/sprites/characters/player.png'
playerImage.classList.add('player')

map.onload = () => {
  drawMap()
  setPixelToWorldScale()
}

function drawMap() {
  ctx.drawImage(map, -600, -600)
}

function setPixelToWorldScale() {
  let worldToPixelScale
  if ((window.innerWidth / window.innerHeight) < (WORLD_WIDTH / WORLD_HEIGHT)) {
    worldToPixelScale = window.innerWidth / WORLD_WIDTH
  } else {
    worldToPixelScale = window.innerHeight / WORLD_HEIGHT
  }

  mapContainer.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
  mapContainer.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`
}