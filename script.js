gsap.to("#loader",{
    opacity:0,
    height:"0%",
    delay:2,
})
gsap.to(".lh11",{
    y:-55.7,
    fontSize:"3vw",
    delay:1
})
gsap.to(".lh12",{
    y:-55.7,
    fontSize:"3vw",
    delay:1
})

var topBox = document.querySelector('.navbar')
var bottomBox = document.querySelector('.nav-box-bottom')

topBox.addEventListener('mouseover', function(){
    gsap.to('.navbar h1',{
        y:-55,
        duration:.3
    })
    
    
})
topBox.addEventListener('mouseleave', function(){
    gsap.to('.navbar h1',{
        y:0,
        duration:.3
    })
})
