// TABS
const tabsBtns = document.querySelectorAll('.tabs_nav button');
const tabsItems = document.querySelectorAll('.tabs_item');


function hideTabs() {
    tabsItems.forEach(item => item.classList.add('hide'));
    tabsBtns.forEach(item => item.classList.remove('active'));
}

function showTab(index) {
    tabsItems[index].classList.remove('hide');
    tabsBtns[index].classList.add('active');
}

hideTabs();
showTab(0);

tabsBtns.forEach((btn, index) => btn.addEventListener('click', () => {
    hideTabs();
    showTab(index);
}))


// ANCHORS
const anchors = document.querySelectorAll('.header_nav a');

anchors.forEach(anc => {
    anc.addEventListener('click', function(event){
        event.preventDefault();

        const id = anc.getAttribute('href');
        const elem = document.querySelector(id);

        window.scroll({
            top: elem.offsetTop - 80,
            behavior: 'smooth'
        });
    })
})

tabsBtns.addEventListener()


