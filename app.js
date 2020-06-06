
const slider = document.querySelector(".slider");
let navMenu = document.querySelector('.navMenu');

//  ----------------------------------  LOGO/SPLASH PAGE Animation---------------------------------------
const splash = document.querySelector(".splash");
const splashImg = document.querySelector(".splashImg");

TweenMax.to(splash, 1, {delay: 1, top: "-100%", ease: "power2.out" })
TweenMax.to(splashImg, 0.5, {delay: 0.8, opacity: 0, y: -500, ease: "power2.out"  })

//  ----------------------------------  NAVIGATION BAR SECTION ---------------------------------------
let navBtn = document.getElementById('iconBars');
navBtn.addEventListener('click', openMenu);

function openMenu(){
    navMenu.style.display = "flex";
    document.body.style.overflow = 'hidden';

    //-- Opening Animations --//
    TweenMax.from(".navMenu", 0.5, {delay: 0, y: "-100%", transformOrigin:"top", ease: "Expo.out" });
    TweenMax.from(".navLinks", 0.5, { delay: 0.3, x: -100, opacity:0, ease: "power2.out" });
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