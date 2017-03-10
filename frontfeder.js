//jshint esversion:6
const countyNames = require("./county-names");

const contae = document.querySelector("#contae");

let countyId = 0;

const badge = document.querySelector("#badge");
badge.addEventListener("click", updateCounty); //notice no brackets on updateCounty


function updateCounty(){
    countyId =  (countyId + 1) % countyNames.length; // use modulo to ensure we never step outside the array
    badge.style.backgroundPositionX = - countyId * 80 + "px";
    console.log(countyId); 
    contae.innerHTML = countyNames[countyId];
}


//headspace.com

//to animate use requestanimationframe (raf)
//get user input.
//At time of selection:
//  - save current backgroundPositionX; 
//  - save time of user input with current time with Date.now();
//  - calculate target value for backgroundPositionX  
//  - set up raf callback
//In the callback
//  - how much time has passed since the user made selection is the basis for calculating the current X position. how we control the speed.


// -------------------

let storyText = document.querySelector("#story-text");
storyTexts = [
    `Shh...
    Shh....
    Shh.....`,

    "<span title='be'>Bígí</span> <span title='quiet'>ciún</span> <span title='o'>a</span> <span title='brethren'>bráthracha</span>...",

    "<span title='there is'>Tá</span> <span title='visitor'>cuirteoir</span> <span title='other'>eile</span> tagtha!",

    "<span title='welcome'>Failte</span> romhat, strainsúr. ",

    "<span title='it was so'>Bhí</span> <span title='knowed'>aithne</span> <span title='is ours'>againn</span> <span title='upon'>ar</span> <span title='thine'>do</span> <span title='venerable'>shín</span> <span title='old'>sean</span> sínsir, <span title='and'>agus</span>",

    "<span title='is not'>Ní</span> <span title='interest '>speis</span> <span title='with me'>liom</span> <span title='the'>an</span> <span title='challenge'>dúthlán</span> sin."
];

let story= 0;

storyText.addEventListener("click", function(event){

    story++;
    storyText.innerHTML = storyTexts[story]; 
    //console.log(story);
});



