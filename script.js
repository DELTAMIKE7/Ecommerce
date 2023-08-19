function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#bg"),
  smooth: true,
  multiplier: .8
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#bg", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#bg").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

}
loco();


// --------Word, Nav,  logo Text Animation----
var textAnimeMain = gsap.timeline();
textAnimeMain.to(".overflow-vertical", {
    duration:.5,
    x: "0px",
    y: "0px",
    z: 0,
    rotate:"0"
})
// --------Main text right first page Text Animation----
const FirstPageAnim = document.querySelectorAll("[data-anim]")
// console.log(fpAnim);
var frontPagekaMainTextAnime =gsap.timeline();
frontPagekaMainTextAnime.to( FirstPageAnim, {
    duration: .5,
    x: "0px",
    y: "0px",
    z: 0,
    rotate:"0"
})
// --------First page images Animation----
gsap.from('.mainfirst-img img ',{
  scale:1.3,
  duration:1.5,
  rotate: -20,
  opacity:.6
})
gsap.from('.trend , .outold' ,{
  backgroundSize:"150% 150%",
  duration:1.5,
  opacity:.6,
})
// gsap.from('.sec-one-left' ,{
//   backgroundSize:"150% 150%",
//   duration:1.5,
//   opacity:.6,
// })
// --------First page images Animation----

// -------- Learn & Contact Btn Animation ------
var leanrContactbtn =gsap.timeline();
leanrContactbtn.from('.learn-contact-btn a',{
  duration:1.5,
  width:0,
  opacity:0
})
.from('.learn-contact-btn a h3',{
  scale: 0,
  duration:.2,
  opacity:0,
},.7)
// -------- Learn & Contact Btn Animation ------


// ---------- Section 2 Para Gsap ------ 

var sec2gsap= gsap.timeline({
  scrollTrigger:{
    trigger:"#section2",
    scroller:"#bg",
    // markers:true,
    start:"top 60%",
    end:"top 55%"
  }
})
.from('.sec2par-imgspan , .col',{
  width:0,
  duration:.7,
  opacity:0
})
.from('.sec2par-imgspan img',{
  height:0,
  duration:.2,
  opacity:0
})

gsap.from('.sec2para-imgspan-mob',{
  scrollTrigger:{
    trigger:".sec2para-imgspan-mob",
    // scroller:"#bg",
    markers:true,
    start:"top 60%",
    // end:"top 55%"
  },
  width:0
})



// ---------- Section 4 Animation GSAP 
const FourthPageAnim = document.querySelectorAll("[data-anim4]")
const FourthPageAnimHeading = document.querySelectorAll("[data-anim4-heading]")
// console.log(FourthPageAnim);

var section4Gsap= gsap.timeline({
  scrollTrigger:{
    trigger:".sec-four-left",
    scroller:"#bg",
    // markers:true,
    start:"top 60%",
    end:"top 55%"
  }
})
.to( FourthPageAnim , {
  duration: .5,
  x: "0px",
  y: "0px",
  z: 0,
  rotate:"0"
})
gsap.to( FourthPageAnimHeading, {
  scrollTrigger:{
    trigger:".misssion",
    scroller:"#bg",
    // markers:true,
    start:"top 88%",
    end:"top 80%"
  },
  duration: .2,
  x: "0px",
  y: "0px",
  z: 0,
  rotate:"0"
})
