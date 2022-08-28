const canvas = document.querySelector('canvas')
      
canvas.height = window.innerHeight
canvas.width  = window.innerWidth 

ctx = canvas.getContext('2d')










const ligthSprite = new Image()
ligthSprite.src   = '../assets/spriteList/sonic1.png'





ligthSprite.addEventListener('load', () => {
    
    let step = 0

    setInterval( () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(
            ligthSprite, 
            step, 0, 
            100, 100,
            0, 0,
            100, 100
        )

        step += 100

        if (step === 2100) {
            step = 1500
        }
    }, 100)
})