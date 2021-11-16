let offScreen=gsap.timeline({
    scrollTrigger:{
        trigger:".static-spacer",
        start:"0%",
        end:"100%",
        scrub:1
    }
});
let videoFix=gsap.timeline({
    scrollTrigger:{
        trigger:".video .img",
        start:"0%",
        end:"300%",
        scrub:1,
        pin:true
    }
});
videoFix.to
offScreen.to(".lf",{x:"-100%",opacity:.2})
.to(".static .text",{scale:0,display:"none"},"-=")
.to(".lr",{x:"100%",opacity:.2},"-=")
//Preloader
let images=[]
for(let i=0;i<1000;i++){
    let im=new Image();
    im.src=`files/imgs/${i+1}.jpg`;
    images.push(im);
}
images[images.length-1].onload=()=>{
    document.querySelector("body").style.overflow="auto";
}
//Render
let isActive=false;
let LastFrame=0;
const frames=200
window.addEventListener("scroll",(e)=>{
    let bodySize=document.body.scrollHeight-window.innerHeight;
    let diffVal=bodySize-(bodySize-((bodySize/100)*7.8))
    if(window.scrollY < diffVal){return;}
    let calculatedVal=((window.scrollY-diffVal)/((bodySize-diffVal)/100));
    console.log(calculatedVal)
    frameChange(calculatedVal);
});
const frameChange=(e)=>{
    let frameBody=document.querySelector(".img");
    try{
    frameBody.querySelector("img").remove();}
    catch{}
    let frame=Math.round(e*10);
    frameBody.appendChild(images[frame-1]);
}