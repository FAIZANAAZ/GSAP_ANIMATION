
// class 2************


// ye hm ak boject ki trha use krty hen or ismy hm css ki properties ko
// as a animation use kr skty hen jesy bg color de diya to wo animation me 
// color chang kryga
// ismy hm likhty 2  4 koi bhi number owo osko khod s me chang k deta he

// gsap.to(".fdiv",{
//     x:1200,
//     duration:5,
//     delay:1,
//     // esy wo x ki traf move hoga yani chorai me 
//     rotate:360,
//     // ismy wo ghomta wa jayga
//     borderRadiius :"50%",
//     // ye bhi ak css ki property he isy wo gol hota howa jayga
//     backgroundColor:"yellow"
// ismy wo orignal color sy yellow pr color ayga

// })

// /////////////////////////////////////////////////////////////////////////

// gsap.from(".fdiv",{
//     y:1200,
//     // isy wo oper sy nichy jayga from he isi liye nichy sy oper ayga 
//     duration:2,
//     delay:1,
//     // esy wo x ki traf move hoga yani chorai me 
  
//   backgroundColor:"yellow"
// // ismy wo yellow color sy orignal  pr color ayga kioky from he 
    
// })

// agr hm to likhty hen to wo left to right jayga or form likhty hen to 
// wo from right to left jayga
// lekin wo ak hi position me chly ga dono me ak sath nhi

// /////////////////////////////////////////////////////////////////////////

// gsap.from("P",{
//     opacity:0,
//     y:100,
//     duration:2,
//     delay:1,
//    backgroundColor:"yellow",
//    stagger:0.5,
// //    isy ye hoga ke hmny p yani pera ko targit kiye he or p bhut sary hen or hm chahty hen ke
// // sb ak sath animat na hon ak ak krky hon to stager sy har 0.5s ke bad dosra p animate hoga sb ak ath nhi hongy 

// repeat:1,
// // ab wo do bar chly ga yani ak bar to wo chlyga hi or 1 likh diya to wo ak
// // bar repeat bhi hoga 
// // hm repeat -1 sy use krengy to wo infinite chly ga

// yoyo:true,
// // isy ye hoga ke wo phly left to right jayga or phir right to left wapas bhi ayga


    
// })

// /////////////////////////////////////////////////////////////////////////

// ****************TIMELINE***********************

// time line sy ye hota he ke hm jo bhi nichy div animation kryga p ya koch bhi wo ak ak krky chlyga
// sb ak sath nhi chly ga or isko variable me stoe krky name sy sue krengy

// let tl= gsap.timeline()
// tl.to("#f2",{
// x:400,
// backgroundColor:"red",
// duration:2,
// delay:2

// })

// tl.to("#f3",{
//     x:400,
//     backgroundColor:"red",
//     duration:2,
//     delay:2
    
//     })
// /////////////////////////////////////////////////////////////////////////

// class 2************

// scrolling 
// agr hmny 2 page bnay hen or hm chahty hen jb scroll bar os page pr ay tb hi animation ho osy phly na ho kr khtam ho jay to hm 
// sbsy phly gsap cdn sy ak cammand copy krky laygy or script sy link krwaygy  cammand me likha hoga scrol trigger

// gsap.from("#s1 #f4",{
//     // "" isky ander hi , ayga
//     scale:0,
//     // isy wo choty sy bara hoga
//     delay:2,
//     duration:2,
//     rotate:360,
//     // scrollTrigger:"#f4 , #f5",

//     // bs isy wo wb hi animat hoga tb os page pr scrollbar ayga
//     // iski properties bhi hoti hen apni

//     scrollTrigger:{
//         trigger:"#s1 #f4",
//         // ab name yha dena hoga
//         // hmy phly body ko targit krna hoga or phir oski div

//         scroller:"body",
        
//         markers:true,

//         // isy likha ayga ke body ka start point kha he or end kha he 
//         scrub:true,

//     //    isy ye hoga ke animation agr 5 sec ka he to scrol bar is page pr ayga or animation hogii phir khatm ho jaygi lekin scrub sy hoga ye ke jb tk scrol bar is page sy bahir nikl kr dosry page pr chala nhi jata wo animation khatam nhi hogi
 
//     // scrub ko 1 y5 ke darmiyan number bhi de skty hen isy wo smoot chlyga jitna number dengy otna 
      
  

//     // 
//     }

// })


// /////////////////////////////////////////////////////////////////////////

// isy x me wo jayga news ki trha headlines
gsap.to("#sec2 h1",{
    transform :'translateX(-50%)',
    scrollTrigger:{
        trigger : "#sec2",
        // jb bhi hm pin krengy koch to os element ke parent ko trigger me rakhengy
        scroller :"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        // top sy 0 yani jb page pr scroll bar touch hoga to animation chaly gi
        scrub:2,
        pin:true
        // isy ye hoga ke jb tk scrol bar jb chly jayga to animation whi pr rok jaygi or jb dobara krengy to wo dobara start ni hogi blky jha pr roki thi wahi pr sy start hogi jesy crol krty waqt wo elemet x sy bich me aya pora ni howa or croll hmny agy brha diya to wo whi rok jayga or jb hm dobara oper aygy to wo wahi sy start hoga

    }
})
/////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////

