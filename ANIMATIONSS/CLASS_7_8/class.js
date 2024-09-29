window.addEventListener("wheel", (dets) => {
    console.log("Wheel event triggered", dets.deltaY); // Test for event
  });
  

// /////////////////////*******class 8************/////////////////////////* */
// gsap.registerPlugin(ScrollTrigger);


// let tl  = gsap.timeline();

// tl.from(".head ",{
//     y:-40,
//     opacity:0,
//     delay:1,
//     duration:1,
//     stagger:0.15
// })

// tl.from(".sec1 ",{
//     x:-200,
//     opacity:0,
//     duration:1,
//     stagger:0.15
// })

// tl.from("#picture",{
//     x:300,
//     opacity:0,
//     duration:0.5
// },"=-0.5")
// =-1 ka matlb he delay dena he yani wo apny number pr he chlyga lekin  1 second pehle start hoga or timeline me delay esy hi dety hen
// let tl2 =gsap.timeline({
//     scrollTrigger:{
//         trigger:".section2",
//         scroller :"body",
//         marker:true,
//         start:"buttom 50%",
//         end:"buttom -10%",
//         scrub:2,
//           ease:"1"
//     }
//     // /isy wo tl2 ke sari chizon pr ye chizen applay hongi
// })
// tl2.from("#sec2",{
//     y:30,
//     opacity:0,
//     duration:1,
  
   
// })

// tl2.from("#pic1",{
//     x:-300,
//     opacity:0,
//     duration:1
   
// },"sathsath")
// ye name likhny sy ye hoga ke jis jis ko hm same name dengy wo sath sath chalygy

// tl2.from("#pic2",{
//     x:300,
//     opacity:0,
//     duration:1
   
// },"sathsath")

// tl2.from("#pic3",{
//     x:-300,
//     opacity:0,
//     duration:1
   
// },"sathsath2")

// tl2.from("#pic4",{
//     x:300,
//     opacity:0,
//     duration:1
   
// },"sathsath2")