
const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');




menuToggle.onclick = function () {
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
}

$('.btn-outline-danger').on( 'click' ,  function(){
    alert("Товар Добавлен в корзину!")
})


$(function () {
    $('#nav li:has(ul)').doubleTapToGo();
});

var prev = ''

$(document).ready(function () {
    $('.slide3').owlCarousel({        
        autoplay: true,
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        center:false,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        navText:[
           "",""
        ],
        responsive: {
            0: {
                items: 1
            },
        }
    })
    $('.slide2').owlCarousel({        
        autoplay: true,
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        center:false,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        navText:[
           "",""
        ],
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            },
            1800: {
                items: 4
            },
            1801: {
                items: 6
            },
        }
    })
    $('.slide1').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        center:false,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        navText:[
           "",""
        ],
        responsive: {
            0: {
                items: 2
            },
            500: {
                items: 2
            },
            600: {
                items: 3
            },
            700: {
                items: 3
            },
            800: {
                items: 4
            },
            900: {
                items: 5
            },
            1000: {
                items: 5
            },
            1100: {
                items: 6
            }
        }
    })  
});
