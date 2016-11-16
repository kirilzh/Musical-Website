/* Fading Navbar*/

window.addEventListener("scroll", function() {
    if (window.scrollY > 20) {
        $('.navbar').fadeIn();
    }
    else {
        $('.navbar').fadeOut();
    }
},false);
