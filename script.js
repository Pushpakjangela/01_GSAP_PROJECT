var tl=gsap.timeline()
tl.from("#nav img, #nav h3,#nav h4,#nav button",{
    y:-100,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.1
})
tl.from("#main1 h1",{
    y:100,
    opacity:0,
    stagger:0.1
})
tl.from("#main>img",{
    scale:0,
    opacity:0,
    rotate:0,
    stagger:0.1
})
tl.from("#main h5",{
    opacity:0,
    scale:0
})
tl.to("h5",{
    y:30,
    repeat:-1,
    duration:0.5,
    yoyo:true
})