let hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', function () {
    let nav_list = document.querySelector('.nav-list');
    hamburger.classList.toggle('active')
    if (nav_list.style.maxHeight) {
        nav_list.style.maxHeight = null;
        return
    }
    nav_list.style.maxHeight = nav_list.scrollHeight / 16 + 'rem';
})


// Accordion
let acc_items = document.querySelectorAll('.accordion-heading');
acc_items.forEach((heading,i) => {
    heading.addEventListener('click', function () {
        let icon = heading.childNodes[3];
        let details = heading.nextElementSibling;
        heading.classList.toggle('active')
        if (details.style.maxHeight) {
            details.style.maxHeight = null;
            icon.textContent = '+';
            return
        }
        details.style.maxHeight = details.scrollHeight/16 + 'rem';
        icon.textContent = '-';
    })
})

// Modal 
const close_modal = (modal,modal_exit,overlay) => {
    overlay.addEventListener('click', function (){
        modal.classList.toggle('active');
        overlay.classList.toggle('active');
    })
modal_exit.addEventListener('click', function () {
    modal.classList.toggle('active');
    overlay.classList.toggle('active');
})
}

const open_modal = (modal,modal_exit,overlay) => {
    let modal_btn = document.querySelector('.modal-btn');
    modal_btn.addEventListener('click', function (){
    modal.classList.toggle('active');
    overlay.classList.toggle('active');
})
}
let modal = document.querySelector('.modal');
let modal_exit = document.querySelector('.modal-exit');
let overlay = document.querySelector('.overlay');
open_modal(modal,modal_exit,overlay);
close_modal(modal,modal_exit,overlay)
