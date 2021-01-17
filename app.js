"use strict";

const learnMore = document.querySelector(".learn-more");

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