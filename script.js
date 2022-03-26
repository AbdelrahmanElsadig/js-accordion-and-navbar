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