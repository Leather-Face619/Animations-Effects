var cen = document.querySelector("#center")
cen.addEventListener("mousemove", function (params) {

    var cenLo = cen.getBoundingClientRect();
    // console.log(cenLo)
    
    var og = params.clientX - cenLo.left
    if (og < cenLo.width / 2) {
        // console.log("left")
        var leftC = gsap.utils.mapRange(0, cenLo.width / 2, 255, 0, og);
        gsap.to(cen, {
            backgroundColor: `rgb(${leftC},0,0)`,
            ease: Power4,
        })
    }
    else {
        var rightc = gsap.utils.mapRange(cenLo.width / 2, cenLo.width, 0, 255, og);
        gsap.to(cen, {
            backgroundColor: `rgb(0,0,${rightc})`,
            ease: Power4,
        });
    }


})
cen.addEventListener("mouseleave", function () {
    gsap.to(cen, {
        backgroundColor: "white"
    })
})
