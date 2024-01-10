$(document).ready(function () {
  $('.slide-conatiner').slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    speed: 10000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
