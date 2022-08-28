const body = document.querySelector('body')

const createCanvas = (id, size = null) => {
    const canvas = document.createElement('canvas')
          canvas.classList.add(id)

    if (size === null) {
        canvas.width  = window.innerWidth
        canvas.height = window.innerHeight - 5
    }
    else {
        canvas.width  = size.x
        canvas.height = size.y
    }
    body.append(canvas)

    return canvas
}
















































































