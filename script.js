const fadingTriggerBox = document.getElementById("fading-trigger-box");
const fadingBackground = document.getElementById("fading-background");
const preContent = document.getElementById("pre-content");

const linksNewTab = document.getElementsByClassName("link-new-tab");

for (let i = 0; i < linksNewTab.length; i++) {
    linksNewTab.item(i).setAttribute("target", "_blank");
    linksNewTab.item(i).setAttribute("rel", "noopener noreferrer");
}

let block2 = false;
let block = false;
window.onscroll = (e) => {
    if(isVisible(fadingTriggerBox)){
        fadingBackground.style.backgroundColor = "#fff";
        preContent.style.opacity = "0.0";
    } else {
        if(window.scrollY < window.innerHeight){
            fadingBackground.style.backgroundColor = "#FFC903";// "#F35A32";
            preContent.style.opacity = "1.0";
        }
    }
}

// https://stackoverflow.com/questions/5353934/check-if-element-is-visible-on-screen
// http://jsfiddle.net/t2L274ty/1/
function isVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}