

// window.addEventListener("wheel",(e)=>{
// // wheel sy jb  bhi scroll hoga to  yeh function call hoga
// //  daltay btata he  ke speed kitni he sidha scroll hota heto value + me ata he or olta to
// // value - me ata he
// if (e.deltaY > 0) {
//     gsap.to(".marque",{
//         transform :"translateX(-200%)",
//         // traform sy ye hoga ke wo  100% -sy wapas ayga yani wo hmny overflow sy hiden kiya he 
//         // 100% sy wapas aye ga
//         duration : 4,
//         repeat  : -1,
//         ease:"none"
//         // isy ye hoga ke start sy  end tak smoothly move hoga hlka tez ni hoga
 

//     })
    
//     gsap.to(".marque img",{
//         rotate:180
//     })

// }else{
//     gsap.to(".marque",{
//         // bydefaut bhi hm marque ki div ko  transform :"translateX(-100%)" rakhengy 
//         transform :"translateX(0%)",
//         // traform sy ye hoga ke wo  100% -sy wapas ayga yani wo hmny overflow sy hiden kiya he 
//         // 100% sy wapas aye ga
//         duration : 2,
//         repeat  : -1,
//         ease:"none"
//         // isy ye hoga ke start sy  end tak smoothly move hoga hlka tez ni hoga
    
//     })

//     gsap.to(".marque img",{
//         rotate:0
//     })
// }


// })


// /////////////////////*******class 8************/////////////////////////* */
gsap.registerPlugin(ScrollTrigger);


let tl  = gsap.timeline();

tl.from(".head ",{
    y:-40,
    opacity:0,
    delay:1,
    duration:1,
    stagger:0.15
})

tl.from(".sec1 ",{
    x:-200,
    opacity:0,
    duration:1,
    stagger:0.15
})

tl.from("#picture",{
    x:300,
    opacity:0,
    duration:0.5
},"=-0.5")
// =-1 ka matlb he delay dena he yani wo apny number pr he chlyga lekin  1 second pehle start hoga or timeline me delay esy hi dety hen
let tl2 =gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller :"body",
        marker:true,
        start:"buttom 50%",
        end:"buttom -10%",
        scrub:2,
          ease:"1"
    }
    // /isy wo tl2 ke sari chizon pr ye chizen applay hongi
})
tl2.from("#sec2",{
    y:30,
    opacity:0,
    duration:1,
  
   
})

tl2.from("#pic1",{
    x:-300,
    opacity:0,
    duration:1
   
},"sathsath")
// ye name likhny sy ye hoga ke jis jis ko hm same name dengy wo sath sath chalygy

tl2.from("#pic2",{
    x:300,
    opacity:0,
    duration:1
   
},"sathsath")

tl2.from("#pic3",{
    x:-300,
    opacity:0,
    duration:1
   
},"sathsath2")

tl2.from("#pic4",{
    x:300,
    opacity:0,
    duration:1
   
},"sathsath2")