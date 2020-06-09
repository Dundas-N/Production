gsap.registerPlugin(ScrollTrigger);

let navMenu = document.querySelector('.navMenu');

// splash animation
const splash = document.querySelector(".splash");
const splashImg = document.querySelector(".splashImg");

TweenMax.to(splash, 1, {delay: 1, top: "-100%", ease: "power2.out" });
TweenMax.to(splashImg, 0.5, {delay: 0.8, opacity: 0, y: -500, ease: "power2.out"  });


//Hero page l
gsap.timeline({defaults:{ease:"power2.out" , duration:2}})
    .from(".hero-image-l h1",{delay: 1, x: -100, transformOrigin:"right" })
    .from(".subTitle", {delay: 0.1, opacity: 0 });

//section one l
let tlOne = gsap.timeline({
    scrollTrigger: {
        trigger: ".pageOne",
        start: "top center",
        markers: true,
        // toggleActions: "restart none none none"
    }
});
tlOne.from(".pageOne h2", 1, {scale:0, opacity: 0, transformOrigin: "bottom ", ease:"power2.out"});
   
    
 //PAGE TWO  
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".pageTwo",
        start: "top center",
        markers: true,
        toggleActions: "restart none none none"
    }
});
tl.from(".projects", 1,{delay: 0.2 , y: 100,  opacity: 0 , stagger: 0.6, ease: "circ.out" })
    .from(".viewMore", {delay: 0.3, opacity: 0})
    .from(".info",{delay: 0.6, x: -100, opacity: 0 , ease: "power2.out" });


//  ----------------------------------  NAVIGATION BAR SECTION ---------------------------------------
let navBtn = document.getElementById('iconBars');
navBtn.addEventListener('click', openMenu);

function openMenu() {
    navMenu.style.display = "flex";
    document.body.style.overflow = 'hidden';

    //-- Opening Animations --//
    TweenMax.from(".navMenu", 0.5, {delay: 0, y: "-100%", transformOrigin:"top", ease: "Expo.out" });
    TweenMax.from(".link", 0.5, { delay: 0.2, x: -100, opacity:0, ease: "power2.out", stagger:0.4 });
    TweenMax.from(".lang p", 0.5, { delay: 0.4, x: -100, opacity:0, ease: "power2.out"});
    TweenMax.from(".socials", 0.5, { delay: 0.5, x: -100, opacity:0, ease: "power2.out" });
}

//-------------------------------------- CLOSE NAVIGATION MENU -------------------------------------
let closeBtn = document.getElementById('closeIcon');
closeBtn.addEventListener('click', closeMenu);

function closeMenu(){
    navMenu.style.display = "none";
    document.body.style.overflow = 'visible';
    // TweenMax.to(".navMenu", 0.5, {delay: 1, y: "-100%", ease: "power2.out" });
    
}

















    // const tl = new TimelineMax();

// tl.fromTo(slider,1, {height: "0%"}, {height: "100%"})
// tl.fromTo(slider, {background: "black"}, {background: "white"});