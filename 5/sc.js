var cd = document.querySelector("#card")
window.addEventListener("mousemove", function (params) {

    let xval = gsap.utils.mapRange(0, window.innerWidth, 100 + cd.getBoundingClientRect().width / 2, window.innerWidth - (100 + cd.getBoundingClientRect().width / 2), params.clientX)
    // console.warn(params)
    let yval = gsap.utils.mapRange(0, window.innerHeight, 100 + cd.getBoundingClientRect().height / 2, window.innerHeight - (100 + cd.getBoundingClientRect().height / 2), params.clientY)
    gsap.to(cd, {
        left: xval + "px",
        top: yval + "px",
        ease: Power4
    })
})