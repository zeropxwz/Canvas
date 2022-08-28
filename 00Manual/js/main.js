// GET CANVAS GET CANVAS GET CANVAS GET CANVAS GET CANVAS GET CANVAS GET CANVAS
const canvas = document.querySelector('canvas')
      
      canvas.height = window.innerHeight
      canvas.width  = window.innerWidth

ctx = canvas.getContext('2d')
// GET CANVAS GET CANVAS GET CANVAS GET CANVAS GET CANVAS GET CANVAS GET CANVAS




//                               =   =   =




// LINE LINE LINE LINE LINE LINE LINE LINE LINE LINE LINE LINE LINE LINE LINE
// ctx.beginPath()
//     ctx.moveTo(0, 0)
//     ctx.lineTo(100, 100)
//     ctx.lineTo(0, 200)

//     ctx.strokeStyle = 'red'
//     ctx.lineWidth   = 5

//     ctx.stroke()
// ctx.closePath()


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

// drawLine([50, 50], [200, 200], {
//     color: 'red', 
//     width: 15,
//     cap: 'round' // butt / round / squere
// })




// LINE LINE LINE LINE LINE LINE LINE LINE LINE LINE LINE LINE LINE LINE LINE


//                               =   =   =


// RECT RECT RECT RECT RECT RECT RECT RECT RECT RECT RECT RECT RECT RECT RECT



// ctx.beginPath()
//     ctx.rect(50, 50, 300, 200)

//     ctx.strokeStyle = 'blue'
//     ctx.lineWidth   = 15
//     ctx.lineJoin   = 'round'

//     ctx.fillStyle   = 'red'

//     ctx.fill()
//     ctx.stroke()
    
// ctx.closePath()



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

// drawRect([50, 50], [200, 200], {
//     fill: {
//         state: true,
//         color: 'red'
//     },
//     stroke: {
//         state: true,
//         color: 'blue',
//         width: 25,
//         join: 'squere'
//     }
// })




// RECT RECT RECT RECT RECT RECT RECT RECT RECT RECT RECT RECT RECT RECT RECT


//                               =   =   =


// CIRCLE CIRCLE CIRCLE CIRCLE CIRCLE CIRCLE CIRCLE CIRCLE CIRCLE CIRCLE CIRCLE 




// background


ctx.beginPath()
    ctx.rect(0, 0, canvas.width, canvas.height)

    ctx.strokeStyle = 'black'
    ctx.lineWidth   = 15
    ctx.lineJoin   = 'round'

    ctx.fillStyle   = 'black'

    ctx.fill()
    ctx.stroke()
    
ctx.closePath()



ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 75, Math.PI ,  90);

    ctx.fillStyle = 'rgb(143, 143, 143)'

    ctx.shadowColor   = 'rgb(143, 143, 143)'
    ctx.shadowBlur    = 50
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0

    ctx.lineWidth   = 15
    ctx.lineJoin   = 'squere'

    ctx.fill()
ctx.closePath()






ctx.beginPath();
    ctx.arc(100, 100, 8, Math.PI ,  90);

    ctx.fillStyle = 'rgb(211, 211, 211)'

    ctx.shadowColor   = 'rgb(211, 211, 211)'
    ctx.shadowBlur    = 20
    ctx.shadowOffsetX = 10
    ctx.shadowOffsetY = 10

    ctx.lineWidth   = 15
    ctx.lineJoin   = 'squere'

    ctx.fill()
ctx.closePath()












// ctx.beginPath();
//     ctx.arc(canvas.width / 2 - 20, canvas.height / 2 - 25, 20, Math.PI ,  90);

//     ctx.fillStyle   = 'rgb(105, 105, 105)'

//     ctx.lineWidth   = 2
//     ctx.lineJoin   = 'squere'

//     ctx.fill()
// ctx.closePath()


// ctx.beginPath();
//     ctx.arc(canvas.width / 2 + 5, canvas.height / 2 + 5, 8, Math.PI ,  90);

//     ctx.fillStyle   = 'rgb(105, 105, 105)'

//     ctx.lineWidth   = 2
//     ctx.lineJoin   = 'squere'

//     ctx.fill()
// ctx.closePath()

































































































































