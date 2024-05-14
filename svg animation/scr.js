var path = "M 20 100 Q 600 100 1300 100"
var finalpath = "M 20 100 Q 600 100 1300 100"

var string = document.querySelector("#string")
string.addEventListener("mousemove", function (dets) {
    path = `M 20 100 Q ${dets.x} ${dets.y} 1300 100`
    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.5,
        ease: "power3.out"
    })
})
string.addEventListener("mouseleave", function (dets) {

    gsap.to("svg path", {
        attr: { d: initialpath },
        duration: 1,
        ease: "elastic.out(1.2,0.3)",
        
    })
})
