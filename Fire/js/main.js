const canvas = document.querySelector('canvas')
      
canvas.height = window.innerHeight
canvas.width  = window.innerWidth  

ctx = canvas.getContext('2d')









const support = {
    procent (proc, from) {
        return from / 100 * proc
    }
}









const Background = ({color})  => {

    return renderElement( () => {
        drawRect([0, 0], [canvas.width, canvas.height], {
            fill: {
                state: true,
                color: color
            }
        })
    })
}


const Fire = ({size, animate}) => {

    const middleScreenX = canvas.width  / 2
    const middleScreenY = canvas.height / 2

    let posX = middleScreenX
    let posY = middleScreenY  + 200

    // orange
    const widthA  = support.procent(15,  size.x)
    const heightA = support.procent(100, size.y)

    const widthB  = support.procent(50 ,size.x)
    const heightB = support.procent(75 ,size.y)
    const shiftB  = size.y - heightB

    const widthC  = support.procent(90, size.x)
    const heightC = support.procent(40,  size.y)
    const shiftC  = size.y - heightC - 10

    // red rewrite
    const widthD  = support.procent(10, size.x)
    const heightD = support.procent(40, size.y)
    const shiftD  = size.y - heightD - 10
    
    const widthE  = support.procent(40, size.x)
    const heightE = support.procent(20, size.y)
    const shiftE  = 80

    let animaneMoveX = animate.x
    let animaneMoveY = animate.x

    setInterval( () => {
        if (animaneMoveX === 0) {
            animaneMoveX = 5
            animaneMoveY = 5
        }
        else {
            animaneMoveX = 0
            animaneMoveY = 0
        }
    }, 125)

    return renderElement( () => {
        // orange
        drawLine([posX, posY - animaneMoveY], [posX, posY + heightA - animaneMoveY], {
            color: 'orange',
            width: widthA + animaneMoveX,

            shadowColor:   'orange',
            shadowBlur:    75,
            shadowOffsetX: 0,
            shadowOffsetY: 0
        })
        drawLine([posX, posY + shiftB - animaneMoveY], [posX, posY + heightB + shiftB - animaneMoveY], {
            color: 'orange',
            width: widthB + animaneMoveX
        })
        drawLine([posX, posY + shiftC - animaneMoveY], [posX, posY + heightC + shiftC - animaneMoveY], {
            color: 'orange',
            width: widthC + animaneMoveX
        })

        // red rewrite
        drawLine([posX, posY + shiftD - animaneMoveY], [posX, posY + heightD + shiftD - animaneMoveY], {
            color: 'red',
            width: widthD + animaneMoveX
        })
        drawLine([posX, posY + shiftE - animaneMoveY], [posX, posY + heightE + shiftE - animaneMoveY], {
            color: 'red',
            width: widthE + animaneMoveX,

            shadowColor:   'red',
            shadowBlur:    2.5,
            shadowOffsetX: 0,
            shadowOffsetY: 0
        })
    })
}

renderScene([
    Background({
        color: 'rgb(0, 0, 0)'
    }),

    Fire({
        pos: {
            x: 0,
            y: 0
        },
        size: {
            x: 62.6,
            y: 125,
        },
        animate: {
            x: 0,
            y: 0,
        }
    })
])




