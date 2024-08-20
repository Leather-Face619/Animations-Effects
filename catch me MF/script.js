var box = document.querySelector("#box")
box.addEventListener("mouseover", changePosition)
box.addEventListener("click", changeText)
const viewportHeight= window.innerHeight - box.clientHeight
const viewportWidth= window.innerWidth - box.clientWidth
function changePosition() {
    let newLeft = Math.floor(Math.random() * viewportWidth)
    let newTop = Math.floor(Math.random() * viewportHeight)

    box.style.marginTop= `${newTop}px`
    box.style.marginLeft= newLeft+"px"
}

function changeText() {
    box.style.background= `green`
   
}