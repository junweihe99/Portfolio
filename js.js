//section selector
const sections = document.querySelectorAll('.section');
//select parent container of all control buttons
const secBtns = document.querySelectorAll('.controls');
//select individual control button
const secBtn = document.querySelectorAll('.control');
//select the body
const content = document.querySelectorAll('.main-content');

//Functionality for traversing between each different section
function sectionTransition(){
    secBtn.forEach((button) => {
        button.addEventListener('click', makeActive);
    });
}

//Add active-button class to selected button
function makeActive(e){
    const btn = e.target;
    const curActive = document.querySelector('.active-btn');
    curActive.classList.remove('active-btn');
    btn.classList.add('active-btn');
}

sectionTransition();
