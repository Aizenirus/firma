// gsap.to(".block", {rotation:100, x :1000, scale: 15, duration:5 })
// gsap.to(".box", {rotation:100, x :1000, scale: 14, duration:1 })
let t1 = gsap.timeline();
t1.to(".block", {x:50})
    .to(".box", {y:500, easy:"back", duration: 2})
    .to(".block", {rotation:100});