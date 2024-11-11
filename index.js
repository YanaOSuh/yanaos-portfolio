// play music funtionality
const soundOn = document.querySelector (".soundOn")
const soundOff = document.querySelector (".soundOff")
const off = document.querySelector ("#off");
const on = document.querySelector ("#on");
const myAudio = document.querySelector ("#myAudio");


off.addEventListener ("click", () => soundTrack("off"));
on.addEventListener ("click", () => soundTrack("on"));

const soundTrack = (soundState) => {
    if (soundState === "off"){
        on.style.display = "block";
        off.style.display = "none";
        soundOff.style.display = "none";
        soundOn.style.display = "block";  
        myAudio.play();
    }
    else if (soundState === "on"){
        on.style.display = "none";
        off.style.display = "block";  
        soundOff.style.display = "block";
        soundOn.style.display = "none";  
        myAudio.pause();
    }
}

// navbar menu funtionality
const btnBars = document.querySelector(".bars");
const btnTimes = document.querySelector(".times");
const SideNav = document.querySelector(".aside");

btnBars.addEventListener("click", () => myFunc("open"));
btnTimes.addEventListener("click", () => myFunc("close"));

const myFunc = (navCondition) => {
    if(navCondition === "open"){
        SideNav.classList.add("show-nav");
        btnTimes.style.display = "block";
        btnBars.style.display = "none";
    } 
    else if(navCondition === "close"){
        SideNav.classList.remove("show-nav");
        btnTimes.style.display = "none";
        btnBars.style.display = "block";
    } 
}

const links = document.querySelectorAll(".navLink");
links.forEach(e=>{
    e.addEventListener("click",t=>{
    t.preventDefault();
    let o=document.querySelector(e.getAttribute("href"));
    window.scrollTo({top:o.offsetTop,behavior:"smooth"})
    SideNav.classList.remove("show-nav");
    btnTimes.style.display = "none";
    btnBars.style.display = "block";
    })
});

// gsap animation
gsap.from(".yLetter", { 
    y: -70, 
    ease: "bounce", 
    opacity: 0, 
    duration: 1.8 
});
gsap.from(".homepageBtn", {
    opacity: 0,
    duration: 2,
    delay: 1,
    ease:"none",
});
gsap.to(".myName", {
    text:"YANA ОСуховская!",
    duration:3.5,
    repeat:-1,
    repeatDelay:0.7,
    ease:"power1.in",
    delay:4,
    yoyo:true
});


// aboutSectionTags
const myTags = [
    "JavaScript",
    "CSS",
    "HTML",
    "Bootstrap",
    "Github",
    "React",
    "Figma",
    "GSAP",
    "Git",
    "Node.js",
    "Flexbox",
    "SASS",
    "SCSS",
    "Grid",
    "WordPress",
];
function radiusValue() {
    if (window.screen.width <= 539) {
        radius = 170;
    } else {
        radius = 250;
    }
    return radius;
}
var tagCloud = TagCloud(".content", myTags, {
    radius: radiusValue(),
    maxSpeed: "slow",
    initSpeed: "fast",
    direction: 135,
    keep: true,
});

// PARTICLES
particlesJS("particles-js", {
    "particles":{
        "number":{
            "value":80,
            "density":{"enable":true,"value_area":800}
        },
    "color":{"value":"#7b56dc"},
    "shape":{
        "type":"circle","stroke":{
            "width":0,
            "color":"#000000"
        },
        "polygon":{"nb_sides":5},
    "image":{
        "src":"img/github.svg",
        "width":30,
        "height":30
    }},
    "opacity":{
        "value":0.3998400639744104,
        "random":false,"anim":{
            "enable":false,
            "speed":1,
            "opacity_min":0.1,
            "sync":false
        }
    },
    "size":{
        "value":3,
        "random":true,
        "anim":{
            "enable":false,
            "speed":20,
            "size_min":0.1,
            "sync":false
        }
    },
    "line_linked":{
        "enable":true,
        "distance":150,
        "color":"#ffffff",
        "opacity":0.4,
        "width":1
    },
    "move":{
        "enable":true,
        "speed":3,
        "direction":"none",
        "random":false,
        "straight":false,
        "out_mode":"out",
        "bounce":false,
        "attract":{
            "enable":false,
            "rotateX":600,
            "rotateY":1200
        }
    }
},
    "interactivity":{
        "detect_on":"canvas",
        "events":{
            "onhover":{
                "enable":false,
                "mode":"repulse"
            },
            "onclick":{
                "enable":true,
                "mode":"repulse"
            },
            "resize":true
        },
    "modes":{
        "grab":{
            "distance":400,
            "line_linked":{"opacity":1}},
            "bubble":{
                "distance":400,
                "size":40,
                "duration":2,
                "opacity":8,
                "speed":3
            },
            "repulse":{
                "distance":150,
                "duration":0.4
            },
            "push":{"particles_nb":4},
            "remove":{"particles_nb":2}
        }
    },
    "retina_detect":true
    }
);