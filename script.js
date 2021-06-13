
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






