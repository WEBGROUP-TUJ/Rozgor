$('.slide').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 3,
  
    responsive: [
      {
        breakpoint: 1801,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

$(document).ready(function () {
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
            1400: {
                items: 5
            },
            1801: {
                items: 6
            }
        }
    })
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
            1600:{
                items: 7
            },
            1800: {
                items: 9
            }
        }
    })  
});

const menuToggle = document.querySelector('#menu-togle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function () {
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active');
}



