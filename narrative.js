//jshint esversion:6
module.exports = function narrative(storyTexts) {
    let storyText = document.querySelector("#story-text");
    storyText.innerHTML = storyTexts[0]; 
    let story= 0;
    storyText.addEventListener("click", function(event){
        story++;
        storyText.innerHTML = storyTexts[story]; 
        //console.log(story);
    });
};
