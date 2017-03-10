//jshint esversion:6


let badge = document.querySelector("#badge");
let contae = document.querySelector("#contae");
let storyText = document.querySelector("#story-text");





function updateCounty(){
    badgeBG -= 80;
    badge.style.backgroundPositionX = badgeBG+"px";
    updateContae(badgeBG);
    console.log(badgeBG); 


}


let badgeBG = 0;
badge.style.backgroundPositionX= badgeBG.badgeBG + "px";
let badgeWindow = {
    x:0,
    y:0,
    width:badge.style.width,
    height:badge.style.height
};



badge.addEventListener("click", function(event){
    updateCounty();
});
//to animate use requestanimationframe (raf)
//get user input.
//At time of selection:
//  - save current backgroundPositionX; 
//  - save time of user input with current time with Date.now();
//  - calculate target value for backgroundPositionX  
//  - set up raf callback
//In the callback
//  - how much time has passed since the user made selection is the basis for calculating the current X position. how we control the speed.



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




function updateContae(badgeBG){
    switch(badgeBG){
        case 0 : contae.innerHTML = ainmContae[0];
            break;

        case -80:   contae.innerHTML = ainmContae[1];
            break;

        case -160: contae.innerHTML = ainmContae[2];
            break;

        case -240: contae.innerHTML = ainmContae[3];
            break;

        case -320: contae.innerHTML = ainmContae[4];
            break;

        case -400: contae.innerHTML = ainmContae[5];
            break;

        case -480: contae.innerHTML = ainmContae[6];
            break;
        
        case -560: contae.innerHTML = ainmContae[7];
            break;

        case -640: contae.innerHTML = ainmContae[8];
            break;

        case -720: contae.innerHTML = ainmContae[9];
            break;

        case -800: contae.innerHTML = ainmContae[10];
            break;

        case -880: contae.innerHTML = ainmContae[11];
            break;

        case -960: contae.innerHTML = ainmContae[12];
            break;

        case -1040: contae.innerHTML = ainmContae[13];
            break;

        case -1120: contae.innerHTML = ainmContae[14];
            break;

        case -1200: contae.innerHTML = ainmContae[15];
            break;
        
        case -1280: contae.innerHTML = ainmContae[16];
            break;
        
        case -1360: contae.innerHTML = ainmContae[17];
            break;

        case -1440: contae.innerHTML = ainmContae[18];
            break;

        case -1520: contae.innerHTML = ainmContae[19];
            break;

        case -1600: contae.innerHTML = ainmContae[20];
            break;
        
        case -1680: contae.innerHTML = ainmContae[21];
            break;

        case -1760: contae.innerHTML = ainmContae[22];
            break;

        case -1840: contae.innerHTML = ainmContae[23];
            break;

        case -1920: contae.innerHTML = ainmContae[24];
            break;

        case -2000: contae.innerHTML = ainmContae[25];
            break;

        case -2080: contae.innerHTML = ainmContae[26];
            break;

        case -2160: contae.innerHTML = ainmContae[27];
            break;

        case -2240: contae.innerHTML = ainmContae[28];
            break;

        case -2320: contae.innerHTML = ainmContae[29];
            break;

        case -2400: contae.innerHTML = ainmContae[30];
            break;

        case -2480: contae.innerHTML = ainmContae[31];
            break;

        case -2560: contae.innerHTML = ainmContae[32];
            break;

        default:
            break;



    }

}


let ainmContae = [
    'Uíḃ Ḟailí',
    'Lú',
    'Loch Garman',
    'Luimnigh',
    'Ḃaile Átha Ċliath',
    'Liatroma',
    'Aontroma',
    'Ḋún na nGall',
    'Ḟear Manaċ',
    'Ċorcaí',
    'Ċill Ṁantáin',
    'Ros Comáin',
    'Ḋoire',
    'Ṡligiġ',
    'Ṫiobraid Árann',
    'Laoise',
    'Ṗort Láirge',
    'Ċill Ċainniġ',
    'Na Mí',
    'Ċiarraí',
    'An LongFoirt',
    'Ṁaigh Eo',
    'Na hIarṁí',
    'An Dúin',
    'Ard Ṁaċa',
    'Ċeaṫarlaċ',
    'Ṁuineaċáin',
    'na Gailliṁe',
    'Ċill Dara',
    'An Ċláir',
    'An Caḃáin',
    'Ṫír Eoghain',
    'Thar lar'

];
