"use scrict"

const headerFixNav = () => {
    window.addEventListener("scroll", function () {
        let header = document.querySelector("header");
        let nav = document.querySelector("#nav");

        if (document.body.clientWidth > 723) {
            if (window.pageYOffset > header.clientHeight + 10) {
                nav.classList.add("fixed");
            } else {
                nav.classList.remove("fixed");
            }
        }
    })

    MouseEvent
};

export default headerFixNav;