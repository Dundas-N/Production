
const splash = document.querySelector(".splash");
const slider = document.querySelector(".slider");

// const tl = new TimelineMax();

// tl.fromTo(slider,1, {height: "0%"}, {height: "100%"})
// tl.fromTo(slider, {background: "black"}, {background: "white"});

TweenMax.from(
    splash, 2, 
    {x:-500}), 
    TweenMax.from(splash, 2, {
        rotation:360, 
        scale:0, 
        opacity:0, 
        ease: "power2.out" 
    });