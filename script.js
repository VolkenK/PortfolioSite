let profile = document.querySelector('#profile');
let project = document.querySelector('#projects');
let contact = document.querySelector('#contact');

document.querySelector('#nav_profile').addEventListener("click", () => smoothScroll(profile));
document.querySelector('#nav_project').addEventListener("click", () => smoothScroll(project));
document.querySelector('#nav_contact').addEventListener("click", () => smoothScroll(contact));

function smoothScroll(ev) {
    console.log('ながさき');
    scrollTo({
        top: ev.offsetTop - 50,
        behavior: "smooth"
    });
}

addModal('dungeon');
addModal('isaac');
addModal('mythe');
addModal('mine');
addModal('inventory');

function addModal(identifier) {

    let object = document.querySelector(`#${identifier}`);

    object.querySelector('.card').addEventListener("click", () => {
        document.querySelector('html').classList.add('enable-scroll');
        object.querySelector(`#${identifier}_modal`).classList.add('is-active');
    });

    object.querySelector('.modal').addEventListener("click", () => {
        document.querySelector('html').classList.remove('enable-scroll');
        object.querySelector('.modal').classList.remove('is-active');
    });

    object.querySelector('.delete').addEventListener("click", () => {
        document.querySelector('html').classList.remove('enable-scroll');
        object.querySelector('.modal').classList.remove('is-active');
    });

    object.querySelector('.modal-card').addEventListener("click", (event) => {
        event.stopPropagation();
    });
}