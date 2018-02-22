document.addEventListener('DOMContentLoaded', function () {

    const menuBtn = document.querySelector('.burger');
    const discardBtn = document.querySelector('.discard');
    
    const toggleAside = (e) => {
        e.preventDefault();

        const toggleEl = document.querySelector('.aside');
        const toggleClass = 'aside_open';

        if (toggleEl.classList.contains(toggleClass)) {
            toggleEl.classList.remove(toggleClass)
        } else {
            toggleEl.classList.add(toggleClass)
        }
    };
    
    menuBtn.addEventListener('click', toggleAside);
    discardBtn.addEventListener('click', toggleAside);
});