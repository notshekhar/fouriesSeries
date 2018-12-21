let canvas = document.querySelector('#canvas')
let ctx = canvas.getContext('2d')
let t = 0
let ts = 0
let tss = 0
let tsss = 0
let originX = canvas.width/4
let originY = canvas.height/2
let radius = 100
let x = originX + radius*Math.sin(t)
let y = originY + radius*Math.cos(t)
let wave = []

function draw(){
  // deleting points from the wave if wave points reaches to more then 100 points
  if(wave.length>800){
    wave.splice(0, 1)
  }
  //clearing the background every time
  ctx.beginPath()
  ctx.fillStyle = "black"
  ctx.rect(0,0,canvas.width, canvas.height)
  ctx.fill()
  x = originX + radius*Math.sin(t)
  y = originY + radius*Math.cos(t)
  //clearing the background every time
  ctx.beginPath()
  ctx.fillStyle = "black"
  ctx.fill()
  ctx.rect(0,0,canvas.width, canvas.height)

  //drawing line
  ctx.beginPath()
  ctx.strokeStyle = "white"
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.fillStyle = "white"
  ctx.moveTo(originX,originY)
  ctx.lineTo(x, y)
  ctx.stroke()
  //drawing another smaller rotating line along the end of first line
  let xs = x + 50*Math.sin(ts)
  let ys = y + 50*Math.cos(ts)
  ctx.beginPath()
  ctx.strokeStyle = "white"
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.fillStyle = "white"
  ctx.moveTo(x,y)
  ctx.lineTo(xs, ys)
  ctx.stroke()
  //drawing another smaller rotating line along the end of first line
  let xss = xs + 25*Math.sin(tss)
  let yss = ys + 25*Math.cos(tss)
  ctx.beginPath()
  ctx.strokeStyle = "white"
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.fillStyle = "white"
  ctx.moveTo(xs,ys)
  ctx.lineTo(xss, yss)
  ctx.stroke()
  //drawing another smaller rotating line along the end of first line
  let xsss = xss + 12.5*Math.sin(tsss)
  let ysss = yss + 12.5*Math.cos(tsss)
  ctx.beginPath()
  ctx.strokeStyle = "white"
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.fillStyle = "white"
  ctx.moveTo(xss, yss)
  ctx.lineTo(xsss, ysss)
  ctx.stroke()
  //drawing line from end of th rotating line to the wave
  let xl = canvas.width/2
  let yl = ysss
  ctx.beginPath()
  ctx.strokeStyle = "white"
  ctx.lineJoin = 'round'
  ctx.lineCap = 'round'
  ctx.fillStyle = "white"
  ctx.moveTo(xsss, ysss)
  ctx.lineTo(xl, yl)
  ctx.stroke()
  //pushing points into wave array
  wave.push({x: xl, y: yl})
  // drawing wave
  let n = 0
  let lastX = xl
  let lastY = yl
  for(let i=wave.length-1; i>-1; i--){
    let wx = wave[i].x+n
    let wy = wave[i ].y
    ctx.beginPath()
    ctx.strokeStyle = "white"
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.fillStyle = "white"
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(wx, wy)
    ctx.stroke()
    lastX = wx
    lastY = wy
    n+=0.4
    // console.log('okay')
  }
  //updating theta
  t += 0.04
  ts += 0.05
  tss += 0.06
  tsss += 0.07
}

setInterval(function(){
  draw()
}, 20)
