// JS for responsive menu demo
// file renamed to "scripts.js" (plural) after the demo

// function to hide/show menu items 
function clickNav(bodyClicked) {
    let navHandle = document.querySelector("nav");
    let burgerWasClicked = navHandle.classList.contains("clicked");
    if (!bodyClicked) navHandle.classList.toggle("clicked"); // ...toggle a "clicked" class on the nav
    else navHandle.classList.remove("clicked");

    // remove menu .clicked if burger is closed
    if (burgerWasClicked || bodyClicked) {
        let allMenus = document.querySelectorAll("nav > ul > li");
        for (const eachMenu of allMenus) {
            eachMenu.classList.remove("clicked");
        }
    }
}

// load click events after DOM loaded
document.addEventListener("DOMContentLoaded", function () {

    // respond to clicks on the burger
    document.querySelector("#navBurger").addEventListener("click", function (e) {
        clickNav(false);
    });

    // handles to all topline nav items
    let allMenus = document.querySelectorAll("nav > ul > li");
    for (const eachMenu of allMenus) {
        // loop through collection of handles individually
        eachMenu.addEventListener("click", function (e) {
            let wasClicked = eachMenu.classList.contains("clicked");
            let allMenus2 = document.querySelectorAll("nav > ul > li");
            for (const eachMenu2 of allMenus2) {
                eachMenu2.classList.remove("clicked");
            }
            if (!wasClicked) {
                eachMenu.classList.add("clicked"); // if this is newly clicked, add click class back
            }
        });
    }

    // close nav if someone clicks outside nav
    document.querySelector("html").addEventListener("click", function (e) {
        if (!e.target.closest("nav")) {
            clickNav(true);
        }
    });

});

// Navigation Buttons

// set up DOM loading event listener 
document.addEventListener("DOMContentLoaded", function () {

    let navButtonSupplies = document.querySelector(".navButtonSupplies");

    if (navButtonSupplies) {
        navButtonSupplies.addEventListener("click", function (e) {
            
            // Go to menu URL
            window.location.href = "supplies.html";
            
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {

    let navButtonTips = document.querySelector(".navButtonTips");

    if (navButtonTips) {
        navButtonTips.addEventListener("click", function (e) {
            
            // Go to menu URL
            window.location.href = "tips.html";
            
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {

    let navButtonProjects = document.querySelector(".navButtonProjects");

    if (navButtonProjects) {
        navButtonProjects.addEventListener("click", function (e) {
            
            // Go to menu URL
            window.location.href = "first-projects.html";
            
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {

    let navButtonProjects = document.querySelector(".navButtonPlaces");

    if (navButtonProjects) {
        navButtonProjects.addEventListener("click", function (e) {
            
            // Go to menu URL
            window.location.href = "places.html";
            
        });
    }
});