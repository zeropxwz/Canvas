const canvas = document.querySelector('canvas')
      
canvas.height = window.innerHeight
canvas.width  = window.innerWidth 

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


const ragdoll = () => {

    
    // texture
    var img = new Image()
    img.src = '../assets/texture/textur_leftleg_top.jpg'


    // ragdoll
    let pos = {
        x: canvas.width  / 2,
        y: canvas.height / 2 - 75,
    }

    let size = {
        x: 50,
        y: 150,
    }

    let long = {
        head:     0,
        headKnee: 0,

        leg:     85,
        legKnee: 85,
    }


    let wiggle = 0

    //
    let headMove = 0
    let bodyMove = 0

    // hand
    let leftHandMove  = 0
    let rightHandMove = 0

    let leftHandKneeMove  = 0
    let rightHandKneeMove = 0

    // leg
    let leftLegMove  = 0
    let rightLegMove = 0

    let leftLegKneeMove  = 0
    let rightLegKneeMove = 0

    let count = 0

    let state  = 'right'

    function run () {
        let runLoop = setInterval( () => {

            headMove = 10
            bodyMove = 10
    
            if (state === 'right') {

                // hand
                leftHandMove  -= 7.5
                rightHandMove += 7.5
            
                leftHandKneeMove  -= 15
                rightHandKneeMove += 15

                // leg
                leftLegMove  += 10
                rightLegMove -= 10
        
                leftLegKneeMove  += 20
                rightLegKneeMove -= 20
    
                // wiggle += 0.25

                count++

                if (count === 4) {
                    state = 'left'
                }
            }
    
            if (state === 'left') {

                // hand
                leftHandMove  += 7.5
                rightHandMove -= 7.5
            
                leftHandKneeMove  += 15
                rightHandKneeMove -= 15

                // leg
                leftLegMove  -= 10
                rightLegMove += 10
    
                leftLegKneeMove  -= 20
                rightLegKneeMove += 20
    
                // wiggle -= 0.25

                count--
    
                if (count === -4) {
                    state = 'right'
                }
            }
    
        }, 65)

        window.addEventListener('keydown', (event) => {

            if (event.code === 'ArrowLeft') {
                clearInterval(runLoop)

                headMove = 0
                bodyMove = 0
            

                // hand
                leftHandMove  = 0
                rightHandMove = 0
    
                leftHandKneeMove  = 0
                rightHandKneeMove = 0

                // leg
                leftLegMove  = 0
                rightLegMove = 0
            
                leftLegKneeMove  = 0
                rightLegKneeMove = 0
            
                wiggle = 0

                count = 0
            
                state = 'right'
            }
        })
    }

    window.addEventListener('keydown', (event) => {
        
        if (event.code === 'ArrowRight') {
            run()
        }
    })

    return renderElement( () => {
        //head
        drawRect(
            [pos.x  + headMove,  pos.y  - 60  + wiggle],
            [size.x,             size.y - 100],
            {
                fill: {
                    state: false
                },
                stroke: {
                    state: true,
                    color: 'red',
                    width: 5
                }
            }
        )
        // body
        drawLine(
            [pos.x + size.x / 2 + bodyMove, pos.y          + wiggle],
            [pos.x + size.x / 2,            pos.y + size.y + wiggle],
            {
                color: 'red',
                width: 5
            }
        )

        // right hand
        drawLine(
            [pos.x + 25 + bodyMove,      pos.y            + wiggle] ,
            [pos.x + 15 + rightHandMove, pos.y + long.leg + wiggle],
            {
                color: 'red',
                width: 5
            }
        )

        // right hand knee
        drawLine(
            [pos.x + 15 + rightHandMove,     pos.y + long.leg                + wiggle],
            [pos.x + 25 + rightHandKneeMove, pos.y + long.leg + long.legKnee + wiggle],
            {
                color: 'red',
                width: 5
            }
        )

        // left hand
        drawLine(
            [pos.x + 25 + bodyMove,    pos.y             + wiggle],
            [pos.x + 15 + leftHandMove, pos.y + long.leg + wiggle],
            {
                color: 'red',
                width: 5
            }
        )
        // left hand knee
        drawLine(
            [pos.x + 15 + leftHandMove,     pos.y + long.leg                + wiggle],
            [pos.x + 25 + leftHandKneeMove, pos.y + long.leg + long.legKnee + wiggle],
            {
                color: 'red',
                width: 5
            }
        )



        
        // left leg
        drawLine(
            [pos.x + 25,               pos.y + 150],
            [pos.x + 35 + leftLegMove, pos.y + 150 + long.leg],
            {
                color: 'red',
                width: 5
            }
        )
        // ctx.beginPath()
        //     ctx.drawImage(img, pos.x + 12.5, pos.y + 150,   25,   75,   )
        //                        //   posX        -posY-     -w-   -h- 
        //     ctx.rotate(1)
        // ctx.closePath()

        // left knee
        drawLine(
            [pos.x + 35 + leftLegMove,     pos.y + 150 + long.leg],
            [pos.x + 25 + leftLegKneeMove, pos.y + 150 + long.leg + long.legKnee],
            {
                color: 'red',
                width: 5
            }
        )


        // right leg
        drawLine(
            [pos.x + 25,                pos.y + 150],
            [pos.x + 35 + rightLegMove, pos.y + 150 + long.leg],
            {
                color: 'red',
                width: 5
            }
        )
        // right kneee
        drawLine(
            [pos.x + 35 + rightLegMove,     pos.y + 150 + long.leg],
            [pos.x + 25 + rightLegKneeMove, pos.y + 150 + long.leg + long.legKnee],
            {
                color: 'red',
                width: 5
            }
        )

    })
}



renderScene([
    Background({
        color: 'black'
    }),
    ragdoll()
])





