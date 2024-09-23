// let menu = document.querySelector ("#nav i")
// let cros =document.querySelector("#cros")


// // ismy ye wirdh or absolute right sy - me braber dena lazmi hoga taky wo right side sy ay yani jb hm right ko 
// // - sy krengy div ko to wo page sy bahir chala jayga phir hm overflow sy hidden krky osko animation sy laygy

// let tl =gsap.timeline({paused:true})
// // isy wo rok jaygi filhal 

// tl.to("#full",{
//     duration: 0.8,
//     right:0
// })

// tl.from("#full h4",{
//     x:150,
//    duration :0.5,
//    stagger:0.28,
//    opacity:0
// })

// tl.from("#cros",{
//     x:150,
//    duration :0.6,
//    stagger:0.2,
//    opacity:0
// })

// // tl.paused() isy krlo ya timeline ke ander ak hi bat he
// menu.addEventListener("click",()=>{
//     tl.play()
// })

// cros.addEventListener("click",()=>{
//     tl.reverse()
//     // isy ye hoga ke jo play kiya he cross pr click krny sy wo wapas pause ho jayga
// })

///////////////////////////**********************CLASS 6 //////////////************************** */ */

function breaktext() {

    
// Create Text Animation
let h1 =document.querySelector("#h11")
let h11 =h1.textContent

let sepratetext=h11.split("")
// isy ak ak word alag alag ho jayga
let clutter =""

sepratetext.forEach((e,f)=>{
    // isy ab ye hoga ke h1 me jitny words hen wo ak ak krky ajaygy or jor jaygy or hm isko jorengy animation sy

let hafvalue=sepratetext.length/2
// isy adhy words a jaygy
 
  if (f<hafvalue) {
       clutter+=`<span class="a">${e}</span>`
  }  else{
       clutter+=`<span class="b">${e}</span>`
  }
//   ye isi liye kiya he taky adhy words ko alag class dekr use kren or adho ko alag

    // isy wo jorengy pr har word span me hoga
})

h1.innerHTML=clutter
// isy ye h1 ke ander bhi ajayga
    
}

breaktext()
let spans = document.querySelectorAll("h1 span"); // sabhi span ko select karo
spans.forEach(span => {
    span.style.display = "inline-block"; // sab spans pe inline-block lagao
});
// kioky span ak block element he to wo nichy ni hony dega y me
gsap.from("h1 .a",{
    y:80,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.15,
    // -me deny sy olta chlyga yani phly end wala word ayga
    // stager sy ye hoga ke wo kitny time me ak ak krky ayga
})

gsap.from("h1 .b",{
    y:80,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:-0.15,
    // -me deny sy olta chlyga yani phly end wala word ayga
  
})

// stager ko ak bar sidha or ak bar - me chahly ka matlb ye he ke animation bich sy start hoga or alag alag class span ko deny ka matlb bhi yehi tha