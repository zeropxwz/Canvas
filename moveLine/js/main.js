const canvas = document.querySelector('canvas')
      
canvas.height = window.innerHeight
canvas.width  = window.innerWidth  

ctx = canvas.getContext('2d')


// background







let posX = canvas.width  / 2
let posY = canvas.height 

const long = 50


setInterval( () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.rect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'black'
    ctx.fill()

    ctx.beginPath()
        ctx.moveTo(posX, posY)
        ctx.lineTo(posX, posY + long)

        ctx.strokeStyle = 'purple'
        ctx.lineWidth   = 10
        ctx.lineCap = 'round'

        ctx.shadowColor = 'blue'
        ctx.shadowBlur = 20
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 0
        ctx.stroke()
    ctx.closePath()

    posY -= 10

    if (posY <= 0) {
        posY = canvas.height
    }
    
}, 125)


// line


