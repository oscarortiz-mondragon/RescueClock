
const timeLine = gsap.timeline({default:{ease:"power1.out"}})
timeLine.to(".text",{y:"0%",duration:1, stagger: 0.25})
timeLine.to(".slider",{y:"-100%",duration:1, delay:3})
// this -= after the {} makes it start the same time as the slider moving
timeLine.to(".text",{y:"100%"},"-=1")
timeLine.fromTo(".question",{opacity:0}, {opacity:1})
timeLine.fromTo(".response",{opacity:0}, {opacity:1})
timeLine.from('.circle',{x:"-100%", ease:"bounce"})

let click = document.querySelector('.circleObject')
let sorry = document.querySelector('.sorryOff')


click.addEventListener('click',function(){
sorry.removeAttribute('class')
sorry.className = "sorryOn"
timeLine.fromTo('img',{
  opacity:0,scale:0,rotation: 720, x:"50%"},{
 opacity:1,scale:.85, rotation: 0}, '<1')
timeLine.to('.options',{x:'0', duration:1, delay:3})
}

)


let none = document.querySelector('.none');
let light = document.querySelector(".light")
let mod = document.querySelector('.mod')
let heavy = document.querySelector('.heavy')


 let response = document.getElementById("response")

// NONE
none.addEventListener("click",function(){
timeLine.to('.light',{
  x: "-100%",duration:.3
})
timeLine.to('.mod',{
  x: "-100%",duration:.3, 
})
timeLine.to('.heavy',{
  x: "-100%",duration:.3, 
})
timeLine.to('.kidding',{y:"-100%",opacity:0})

timeLine.to('.confirm',{opacity:1})
})

// Light
light.addEventListener("click",function(){

timeLine.to('.none',{
  x: "-100%",duration:.3 
})
timeLine.to('.light',{
  y:"-100%", duration:.3})
timeLine.to('.mod',{
  x: "-100%",duration:.3, 
})
timeLine.to('.heavy',{
  x: "-100%",duration:.3, 
})

timeLine.to('.kidding',{y:"-100%",opacity:0})

timeLine.to('.confirm',{opacity:1})
})
// MOD 
mod.addEventListener("click",function(){

timeLine.to('.none',{
  x: "-100%",duration:.3
})
timeLine.to('.light',{
  x: "-100%",duration:.3, 
})
timeLine.to('.mod',{
  y:"-250%", duration:.3})

timeLine.to('.heavy',{
  x: "-100%",duration:.3, 
})

timeLine.to('.kidding',{y:"-100%",opacity:0})

timeLine.to('.confirm',{opacity:1})
})
// HEAVY
heavy.addEventListener("click",function(){
 
timeLine.to('.kidding',{y:"-100%",opacity:0},"-=1")
timeLine.to('.none',{
  x: "-100%",duration:.3
})

timeLine.to('.light',{
  x: "-100%",duration:.3, 
})


timeLine.to('.mod',{
  x:"-100%", duration:.3})
 timeLine.to('.heavy',{
  y: "-400%",duration:.3})


timeLine.to('.confirm',{opacity:1})
timeLine.to('.confirmIcons',{
  x:"0", duration:1
})
})

let no = document.querySelector('.fa-window-close')
let yes = document.querySelector('.fa-check-square')


no.addEventListener("click", function(){
timeLine.to('.confirm',{opacity:0})

 timeLine.to('.heavy',{
  x: "50%",duration:.2, y:"50"})


timeLine.to('.mod',{
  x:"50%", duration:.2, y: "50"})

  timeLine.to('.light',{
  x: "50%",duration:.2, y: "50" 
})

  timeLine.to('.none',{
  x: "50%",duration:.2
})

timeLine.to('.kidding',{y:"50", opacity:1}, '-=1')

timeLine.to('.confirm',{opacity:0})

})