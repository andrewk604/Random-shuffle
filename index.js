let elements

const classes = [`animate__rotateIn`,`animate__bounceOut`, `animate__bounceOutDown`, `animate__bounce`, `animate__flash`, `animate__flash`, `animate__shakeY`, `animate__shakeY`, `animate__wobble`, `animate__jello`, `animate__fadeInTopRight`, `animate__fadeInTopRight`, `animate__rotateInDownLeft`, `animate__zoomOut`, `animate__slideOutDown`, `animate__rotateInDownLeft`, `animate__rotateInDownRight`, `animate__rotateInUpLeft`, `animate__rotateInUpRight`, `animate__rotateOut`, `animate__rotateOutDownLeft`, `animate__rotateOutDownRight`, `animate__rotateOutUpLeft`, `animate__rotateOutUpLeft`, `animate__rotateOutUpLeft`, `animate__rotateOutUpLeft`, `animate__zoomOutUp`, `animate__slideInLeft`, `animate__slideInDown`, `animate__slideInUp`]

document.addEventListener("DOMContentLoaded", () => {
    elements= [...document.querySelectorAll("div,p,table,th,tr,td,img")]
    console.log(elements)
    
    function randomAnimation() {
        const subString = "animate__"
        console.log(`animation`)
            elements.forEach(i => {
                i.classList.remove(i.classList[1])
                i.classList.add(classes[Math.floor(Math.random() * classes.length)])
            })
    }


setInterval(randomAnimation,200)
    
})
