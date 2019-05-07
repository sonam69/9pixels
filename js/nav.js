/********** 9 pixel move to top **********/
window.addEventListener("scroll", function() {
    if(window.pageYOffset > 9) {
        document.getElementsByTagName("nav")[0].className = "fixed";
    }
    else {
        document.getElementsByTagName("nav")[0].className = "";
    }
});

/********** secondary menu **********/

document.getElementById("about_us").onmouseover = function() {
    document.getElementById("secondary_menu").className = "visible";
};

document.getElementById("about_us").onmouseout = function() {
    document.getElementById("secondary_menu").className = "hidden";
};

/********** scroll to top **********/

function scroll_to_top() {
    if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
        window.scrollBy(0, -50);
        requestAnimationFrame(scroll_to_top);
    }
}

