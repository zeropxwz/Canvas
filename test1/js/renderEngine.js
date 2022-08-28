



const renderScene = ( register ) => {

    const exec = () => {
        requestAnimationFrame(exec)
        ctx.clearRect(0,0, canvas.width, canvas.height)

        for (let i in register) {
            register[i]()
        }
    }
    requestAnimationFrame(exec)
}

const renderElement = ( view ) => {
    return view
}




// 

function drawLine (begin, end, prop) {
    ctx.beginPath()
        ctx.moveTo(begin[0], begin[1])
        ctx.lineTo(end[0],   end[1]  )

        if (prop) {
            prop.color ? ctx.strokeStyle = prop.color : ctx.strokeStyle
            prop.width ? ctx.lineWidth   = prop.width : ctx.lineWidth
            prop.cap   ? ctx.lineCap     = prop.cap   : ctx.lineCap
        }
        ctx.stroke()
    ctx.closePath()
}

function drawRect(begin, size, prop) {
    ctx.beginPath()
        ctx.rect(begin[0], begin[1], size[0], size[1])

        if (prop.fill) {
            prop.fill.color   ? ctx.fillStyle = prop.fill.color : ctx.fillStyle
            
            prop.fill.state   ? ctx.fill() :    ctx.fillStyle   = ''
        }
        if (prop.stroke) {
            prop.stroke.color ? ctx.strokeStyle = prop.stroke.color : ctx.strokeStyle
            prop.stroke.width ? ctx.lineWidth   = prop.stroke.width : ctx.lineWidth
            prop.stroke.join  ? ctx.lineJoin    = prop.stroke.join  : ctx.lineJoin 

            prop.stroke.state ? ctx.stroke() : ctx.strokeStyle = ''
        }
    ctx.closePath()
}