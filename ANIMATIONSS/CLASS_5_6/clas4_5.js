let menu = document.querySelector ("#nav i")
let cros =document.querySelector("#cros")


// ismy ye wirdh or absolute right sy - me braber dena lazmi hoga taky wo right side sy ay yani jb hm right ko - sy krengy div ko to wo page sy bahir chala jayga phir hm overflow sy hidden krky osko animation sy laygy

let tl =gsap.timeline({paused:true})
// isy wo rok jaygi filhal 

tl.to("#full",{
    duration: 0.8,
    right:0
})

tl.from("#full h4",{
    x:150,
   duration :0.5,
   stagger:0.28,
   opacity:0
})

tl.from("#cros",{
    x:150,
   duration :0.6,
   stagger:0.2,
   opacity:0
})

// tl.paused() isy krlo ya timeline ke ander ak hi bat he
menu.addEventListener("click",()=>{
    tl.play()
})

cros.addEventListener("click",()=>{
    tl.reverse()
    // isy ye hoga ke jo play kiya he cross pr click krny sy wo wapas pause ho jayga
})