var n1 = document.getElementById("nav")

n1.addEventListener("click",(e)=>{
    
    if (e.target.dataset.category !== undefined) {
        
        imageFilter(e.target.dataset.category);
    }
})

var images = document.querySelectorAll(".images");

function imageFilter(value) {
    images.forEach((v)=>{

       
            if (v.dataset.category == value || value == "all") {
                v.style.display = "block";
            } else {
                v.style.display = "none";
            }
        
    })
}