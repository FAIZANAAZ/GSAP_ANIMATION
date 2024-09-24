// // CLASS 3
// // yha hm ak esa path bnaygy kesy gitar ki bend hoti he

// // hmy path ki value ko yad rkhna hota to h oko variable me save kr leny 

// let path=`M 10 100 Q 500 100 990 100`
// let finalpath=`M 10 100 Q 500 100 990 100`


// let string =document.querySelector("#d1")
// // mousemove d.y
// string.addEventListener("mousemove",(dets)=>{
// path=`M 10 100 Q ${dets.x} ${dets.y} 990 100`
// // yani jesa ke hmy pta he ke event pr jo koch hota he wo hmary
// // perameter me nazr ata he hmny kha jb bhi mouse y exes me move ho or wo jitna bhi move ho oska number hmary center poitn ke number 
// // me set krdo to jha jha mouse jayga wha path bhi move hoga center sy
// gsap.to("svg path",{
//     attr:{d:path},
//     // attr ka matlb atribute yani yha hm path ko lekr ay hen
//     duration:0.3,
//     ease:"power3.out",    
//     // ease matlb kitna wo move kryga smoot tez hlka ye alag alag hoty hen hm isy search krky bhi dekh skty hen gsap ease pr

    
// })
// })

// string.addEventListener("mouseleave",()=>{
// gsap.to("svg path",{
//     attr:{d:finalpath},
//         duration:1.5,
//         ease:"elastic.out(1,0.2)",    
    
        
// })
// })


// /////////////////////************

// CLASS 4 */

// CREATE CURSOR 
// yha hm ek cursor bnaygy jo ki mouse pr move ho to hmary div bhi move ho

let main =document.querySelector("#main")
let cursor =document.querySelector("#cursor")
let imag =document.querySelector("#imag")



main.addEventListener("mousemove",(e)=>{

    gsap.to(cursor,{
        // hmy agr query selector sy element ko pkar lengy to hm variable ka 
        // name use kr skty he "#cursor" esy likhny ki need nhi he

        x:e.x,
        y:e.y,
        duration:1,
        ease:"back.out"
    })

})

imag.addEventListener("mouseenter",(f)=>{
       cursor.innerHTML="view More"
    gsap.to(cursor,{
  scale:4,
  backgroundColor:"#ffffff10a"
//   isy ye hoga ke jb bhi  mouse image pr move ho to cursor ka size bhi bara ho jayga


    })
})

imag.addEventListener("mouseleave",(f)=>{
    cursor.innerHTML=""
    gsap.to(cursor,{

   scale:1,
  backgroundColor:"#fff"

//   isy ye hoga ke jb bhi  mouse image sy bahir move ho to cursor ka size bhi chota jayga


    })
})
