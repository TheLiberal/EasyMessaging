"use strict";

const learnMore = document.querySelector(".learn-more");
const copyrightYear = document.querySelector(".copyright-year");
copyrightYear.textContent = new Date().getFullYear();

learnMore.addEventListener("click", scrollPage);

function scrollPage(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop - 180;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}