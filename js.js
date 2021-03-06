//select all control buttons
const secBtn = document.querySelectorAll('.control');

//select dark-mode button
const themeBtn = document.querySelector('.dark-mode');

//Functionality for traversing between the different sections
function sectionTransition(){
    //make clicked button the active-btn
    secBtn.forEach((button) => {
        button.addEventListener('click', makeActive);
    });
}

//Add active class to the selected button and its corresponding section
function makeActive(e){
    //Make active button
    const btn = e.target;
    const curActiveBtn = document.querySelector('.active-btn');
    curActiveBtn.classList.remove('active-btn');
    btn.classList.add('active-btn');
    //Make active section
    const section = document.getElementById(e.target.dataset.id);
    const curActiveSec = document.querySelector('.active');
    curActiveSec.classList.remove('active');
    section.classList.add('active');
}

//Functionality of changing website theme
function toggle(){
    themeBtn.addEventListener('click', toggleTheme);
}

//Toggle theme between light and dark mode
function toggleTheme(){
    let element = document.body;
    element.classList.toggle('light');
}

sectionTransition();
toggle();
