let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')
let t = 0

let originX = 200
let originY = canvas.height/2
let wave = []

function draw(){
  // deleting points from the wave if wave points reaches to more then 100 points
  if (wave.length > 800) {
    wave.pop()
  }
  //clearing canvas
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.width);
  
  let x = originX
  let y = originY
  let lastX = originX
  let lastY = originY
  let a = 12
  let r = 100
  for (let i = 0; i < a; i++) {
    let n = (i * 2) + 1
    let radius = r * (4 / (n * Math.PI))
    x += radius * Math.cos(n * t)
    y += radius * Math.sin(n * t)
    //drawing line
    ctx.beginPath()
    ctx.strokeStyle = "white"
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.fillStyle = "white"
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(x, y)
    ctx.stroke()
    //adding dot at corner
    ctx.beginPath()
    ctx.fillStyle = 'rgba(255,255,255,0.7)'
    ctx.arc(lastX, lastY, 2, 0, 2 * Math.PI)
    ctx.fill()
    
    //drawing circles
    ctx.beginPath()
    ctx.strokeStyle = 'rgba(255,255,255,0.5)'
    ctx.arc(lastX, lastY, radius, 0, 2 * Math.PI)
    ctx.stroke()
    
    //update value of lastX and lastY
    lastX = x
    lastY = y
  }
  wave.unshift(y)
  
  //drawing line from to wave
  ctx.beginPath()
  ctx.strokeStyle = "white"
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.fillStyle = "white"
  ctx.moveTo(x,y)
  ctx.lineTo(500, wave[0])
  ctx.stroke()

  //drawing wave
  ctx.beginPath()
  ctx.strokeStyle = "white"
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.fillStyle = "white"
  ctx.moveTo(500, wave[0])
  for(let i=0; i<wave.length-1; i++){
    ctx.lineTo(500+i, wave[i])
  }
  ctx.stroke()
  t += 0.04
}

setInterval(function(){
  draw()
}, 20)
