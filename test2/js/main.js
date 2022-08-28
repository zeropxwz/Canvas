const canvas = document.querySelector('canvas')
      
canvas.height = window.innerHeight
canvas.width  = window.innerWidth  * 3

ctx = canvas.getContext('2d')



let levelPointer = 0



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


    function move () {
        let moveState = false
        let key       = null
    
        window.addEventListener('keydown', (event) => {
    
            if (moveState === false) {
                moveState = true
    
                key = event.code
    
                let moveLoop = setInterval( () => {
                    if (event.code === 'ArrowLeft') {
                        levelPointer -= 10
                    }
                    if (event.code === 'ArrowRight') {
                        levelPointer += 10
                    }
            
        
        
                    if (moveState === false) {
                        clearInterval(moveLoop)
                    }
                    console.log(levelPointer)
                }, 35)
            }
        })
        window.addEventListener('keyup', (event) => {
            if (event.code === key) {
                moveState = false
            }
        })
    }
    move()

    // jump
    window.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            pos.y -= 75
        }
    })

    return renderElement( () => {
        drawRect(
            [pos.x,  pos.y],
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

const Mob = ({size, pos, color}) => {

    return renderElement( () => {
        drawRect(
            [pos.x - levelPointer,  pos.y],
            [size.y, size.y],
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
            [pos.x - levelPointer,  pos.y],
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
            x: 50,
            y: 150,
        },
        pos: {
            x: 200,
            y: canvas.height - canvas.height / 8 - 150,
        },
        color: 'red'
    }),

    Mob({
        size: {
            x: 50,
            y: 50,
        },
        pos: {
            x: window.innerWidth + 300,
            y: canvas.height - canvas.height / 8 - 50,
        },
        color: 'yellow'
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