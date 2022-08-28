const canvas = document.querySelector('canvas')
      
canvas.height = window.innerHeight
canvas.width  = window.innerWidth  

ctx = canvas.getContext('2d')








function background () {
    const color = {
        colorA: 'black'
    }

    return renderElement( () => {
        drawRect([0, 0], [canvas.width, canvas.height], {
            fill: {
                state: true,
                color: color.colorA
            }
        })
    })
}

function rain () {

    const move = {
        X: 0,
        Y: 0,
    }

    let posX = 0
    let posY = 0

    setInterval( () => {
        move.X += 10
        move.Y += 10

        posX = canvas.width - move.X
        posY = move.Y

        if (move.X >= 175) {
            move.X = 0
            move.Y = 0

            posX = canvas.width - move.X
            posY = move.Y
        }
    }, 15)

    return renderElement( () => {
        for (let shiftX = 0; shiftX < 2500; shiftX += 200) {
            drawLine([posX - shiftX, posY],[posX - shiftX - 20, posY + 20], {
                color: 'deepskyblue',
                width: 2.5
            })
        }
        for (let shiftX = 0; shiftX < 2500; shiftX += 200) {
            drawLine([posX - shiftX - 75, posY - 75], [posX - shiftX - 75 - 20, posY - 75 + 20], {
                color: 'deepskyblue',
                width: 2.5
            })
        }
        for (let shiftX = 0; shiftX < 2500; shiftX += 200) {
            drawLine([posX - shiftX + 75, posY - 150],[posX - shiftX + 75 - 20, posY - 150 + 20], {
                color: 'deepskyblue',
                width: 2.5
            })
        }
    })
}


function fire(count) {
    const size = {
        x: 0,
        y: 0
    }

    setInterval( () => {

        if (size.x === 0) {
            size.x += 5
            size.y += 5
        }
        else {
            size.x = 0
            size.y = 0
        }
    }, 125)

    return renderElement( () => {
        console.log(count)

        drawLine([300, canvas.height - 50 - size.y], [300, canvas.height - 150 - size.y], {
            color: 'orange',
            width: 5 + size.x,

            shadowColor:   'orange',
            shadowBlur:    25,
            shadowOffsetX: 0,
            shadowOffsetY: -5
        })
        drawLine([300, canvas.height - 50 - size.y], [300, canvas.height - 125 - size.y], {
            color: 'orange',
            width: 20 + size.x
        })
        drawLine([300, canvas.height - 60 - size.y], [300, canvas.height - 100 - size.y], {
            color: 'orange',
            width: 40 + size.x
        })
        drawLine([300, canvas.height - 70 - size.y], [300, canvas.height - 90 - size.y], {
            color: 'red',
            width: 20 + size.x
        })
        drawLine([300, canvas.height - 60 - size.y], [300, canvas.height - 100 - size.y], {
            color: 'red',
            width: 5 + size.x
        })
    })
}

renderScene([
    background(),
    rain()
])