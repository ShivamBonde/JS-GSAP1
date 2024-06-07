var time=gsap.timeline();
time.from("#nav h3",{
    y:-50,
    delay:0.4,
    duration:0.8,
    opacity:0,
    stagger:0.3

})
time.from("#container h1",{
    x:-500,
    delay:0.5,
    duration:0.8,
    opacity:0,
    stagger:0.3
})
time.from("img",{
    x:100,
    rotate:45,
    opacity:0,
    duration:0.7,
    stagger:0.5
})