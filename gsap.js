var tl = gsap.timeline()
tl.from(".menuIcons",{
    y:-20,
    opacity:0,
    delay:.5
})
tl.from(".logo",{
    y:-20,
    opacity:0,
    delay:.5
})
tl.from(".menu-items li",{
    y:-20,
    opacity:0,
    stagger:.3
})
