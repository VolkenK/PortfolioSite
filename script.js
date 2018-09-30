// const canvas = document.getElementById('canvas');
// const context = canvas.getContext("2d");
// let body = document.querySelector('body');
// let leftPadding = 0;
// setInterval(() => {
//     leftPadding++;
//     body.style.backgroundPositionX = leftPadding + 'px';
//     if (leftPadding > 10000) {
//         leftPadding = 0;
//     }
// }, 25);


let profileScroller = document.querySelector('#nav_profile');
let projectScroller = document.querySelector('#nav_project');
let contactScroller = document.querySelector('#nav_contact');
let profile = document.querySelector('#profile');
let project = document.querySelector('#projects');
let contact = document.querySelector('#contact');

profileScroller.addEventListener("click", scrollToProfile);
projectScroller.addEventListener("click", scrollToProjects);
contactScroller.addEventListener("click", scrollToContact);

function scrollToProfile() {
    smoothScroll(profile);
}

function scrollToProjects() {
    smoothScroll(project);
}

function scrollToContact() {
    smoothScroll(contact);
}

function smoothScroll(ev) {
    console.log('ながさき');
    scrollTo({
        top: ev.offsetTop - 50,
        behavior: "smooth"
    });
}