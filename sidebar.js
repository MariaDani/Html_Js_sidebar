const toggleButton = document.querySelector('.switch-button');
const logoText = document.querySelectorAll('.logo-text');
const textElem = document.querySelectorAll('.section-text');
const breakLine = document.querySelector('.break-line');
const contentBox = document.querySelector('.content');
const futter = document.querySelector('.futter');
const sectionItem = document.querySelectorAll('.section-item');

if (toggleButton) {
    toggleButton.addEventListener("click", function(e) {
        toggleButton.classList.toggle('_active');

        logoText.forEach((el) => {
            el.classList.toggle('_active');
        });

        textElem.forEach((el) => {
            el.classList.toggle('_active');
        });

        breakLine.classList.toggle('_active');
        contentBox.classList.toggle('_active');
        futter.classList.toggle('_active');

        sectionItem.forEach((el) => {
            el.classList.toggle('_active');
        })
    });
}