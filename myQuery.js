$(document).ready(function () {
  ///////on scoll navbar coler change///////
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".main-bar").css("background", "#1e8fd0");
    } else {
      $(".main-bar").css("background", "transparent");
    }
  });

  ///////navbar side drawer toggal/////////

  $("#mobile-side-drawer").on("click", function () {
    $(".mobile-sider-drawer-menu").toggleClass("active");
  });

  //////////Search botton ////////
  $('a[href="#search"]').on("click", function (event) {
    $("#search").addClass("open");
    $('#search > form > input[type="search"]').focus();
  });

  $("#search, #search button.close").on("click keyup", function (event) {
    if (event.target === this || event.target.className === "close") {
      $(this).removeClass("open");
    }
  });

  ////HOME SLIDER
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    speed: 3000,
    grabCursor: true,
    parallax: true,
    loop: true,
    autoplay: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

  ////////////oul-Carousel/////////
  $(".services-gallery-one").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 15,
    autoplay: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      767: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // project carousel

  $(".project-carousel").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 70,
    autoplay: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      640: {
        items: 1,
      },
      991: {
        items: 2,
      },
    },
  });
});
