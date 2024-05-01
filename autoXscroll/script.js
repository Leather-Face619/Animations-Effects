document.addEventListener("wheel", (event) => {
    if (event.deltaY < 0) {
        gsap.to("#marque", {
            transform: "translateX(-200%",
            repeat: -1,
            duration: 4,
            ease: "none"
        })
        gsap.to("#marque img", {
            rotate:180,
            duration:.8
        })
    }
    else {

        gsap.to("#marque", {
            transform: "translateX(0%",
            repeat: -1,
            duration: 4,
            ease: "none"
        })
        gsap.to("#marque img", {
            rotate:0,
            duration:.8
        })
    }
})