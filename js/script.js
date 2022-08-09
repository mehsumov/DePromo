$(".references-carousel").owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 5,
    },
  },
});
$(".main-slider").slick({
  autoplay: false,
  autoplaySpeed: 4e3,
  lazyLoad: "progressive",
  speed: 600,
  arrows: true,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='bi bi-arrow-left-short'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='bi bi-arrow-right-short'></i></button>",
  dots: true,
  cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)",
  // responsive:[{breakpoint:1025,settings:{cssEase:""}}]
});
$("#products .owl-carousel").owlCarousel({
  loop: false,
  nav: true,
  dots: false,
  margin: 15,
  navContainer: "#carousel-nav",
  navText: [""],
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 5,
    },
  },
});
$(".examp-carousel").owlCarousel({
  loop: false,
  nav: true,
  dots: false,
  margin: 0,
  navContainer: "#carousel-examp",
  navText: [""],
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 1,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
});
$(".nav-drop .nav-link").click(function (e) {
  e.stopPropagation();
  e.preventDefault();
  $(this).parent().siblings().find(".menu-drop").slideUp();
  $(this).parent().find(".menu-drop").slideToggle();
});
$(".navbar-toggler").click(function () {
  $("header").toggleClass("active");
});
$(function () {
  $(".lang").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    $(" .lang-drop").toggleClass("active");
  });
});
