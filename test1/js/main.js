const canvas = document.querySelector('canvas')
      
canvas.height = window.innerHeight
canvas.width  = window.innerWidth  

ctx = canvas.getContext('2d')



let playerPointerX = undefined
let playerBottom   = canvas.height - canvas.height / 8



const Background = ({color}) => {

    return renderElement( () => {
        drawRect(
            [0, 0],
            [canvas.width, canvas.height],
            {
                fill: {
                    state: true,
                    color: color
                }
            }
        )

    })
}


const Player = ({size, pos, color}) => {

    let stateJump      = null 
        playerPointerX = pos.x
    
    // move
    window.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowLeft') {
            pos.x -= 10
            playerPointerX = pos.x
        }
        if (event.code === 'ArrowRight') {
            pos.x += 10
            playerPointerX = pos.x
        }
    })

    window.addEventListener('keydown', (event) => {

        if (event.code === 'Space') {
            // func
            if (stateJump === null) {

                let jumpY     = 0
                    stateJump = true
               
                const jump = setInterval( () => {
                    
                    if (stateJump === true) {
                        jumpY -= 5
                        pos.y -= 5

                        if (jumpY <= -180) {
                            stateJump = false
                        }   
                    } 
                    else {
                        jumpY += 5
                        pos.y += 5

                        if (jumpY === 0) {
                            stateJump = null

                            clearInterval(jump)
                        }
                    }
                }, 10)
            }
            // endfunc
        }
    })

    return renderElement( () => {
        drawRect(
            [pos.x, pos.y],
            [size.x, size.y],
            {
                fill: {
                    state: true,
                    color: color
                }
            }
        )
    })
}

const Bottom = ({size, pos, color}) => {

    return renderElement( () => {
        drawRect(
            [pos.x, pos.y],
            [size.x, size.y],
            {
                fill: {
                    state: true,
                    color: color
                }
            }
        )
    })
}







renderScene([
    Background({
        color: 'black'
    }),

    Player({
        size: {
            x: 100,
            y: 200,
        },
        pos: {
            x: 100,
            y: playerBottom  - 200//canvas.height / 2 - 100,
        },
        color: 'red'
    }),

    Bottom({
        size: {
            x: canvas.width,
            y: canvas.height / 8,
        },
        pos: {
            x: 0,
            y: canvas.height - canvas.height / 8,
        },
        color: 'green'
    })
])