/*==============================================================
| Template Name    : Aminul Islam - Personal Portfolio Template
| Author           : Md Aminul Islam
  Author URL       : themeapex.com
| Version          : 1.0.0
| Created          : 10/10/2020
| File Description : Main css file of the template
*===============================================================
*/


/*===============================================================
    JS INDEXING
  ===============================================================
  |  1.Preloader
  |  2.Go to Top
  |  3.Header section
  |  4.Menu Sticky
  |  5.Popup-Video
  |  6.Portfolio Section
  |  7.Bootstrap Tabs JS
  |  8.OwlCarousel
  |  9.Wow Js
  |  10. Menu Scroll
====================================*/
(function ($) {
  ("use strict");

  /*=====================================
      *Preloader section strat*
   ======================================*/
  $(window).on("load", function () {
    $(".preloader").fadeOut();
  });
  /*=====================================
  // Go to Top
  ======================================= */
  $(window).on("scroll", function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $(".go-top").addClass("active");
    if (scrolled < 300) $(".go-top").removeClass("active");
  });

  // Click Event
  $(".go-top").on("click", function () {
    $("html, body").animate({ scrollTop: "0" }, 500);
  });
  /*=====================================
     * Header section strat*
   ======================================*/

  $(".header-search-wrapper .btn-search").on("click", function () {
    $(this).parent(".header-search-wrapper").toggleClass("open-search");
  });
  $(".header-area .toggle-btn").on("click", function () {
    $(".header-area").toggleClass("active-sidenav");
  });
  $(".sidenav_wrapper .side_navbar .nav-item").each(function (index) {
    $(this).css("--nav-index", index);
  });

  $(".side_navbar .dropdown-link").on("click", function (j) {
    var dropDown = $(this).closest("li").find(".submenu");
    $(this).closest(".side_navbar").find(".submenu").not(dropDown).slideUp();
    if ($(this).hasClass("active-dropdown")) {
      $(this).removeClass("active-dropdown");
    } else {
      $(this)
        .closest(".side_navbar")
        .find(".dropdown-link.active-dropdown")
        .removeClass("active-dropdown");
      $(this).addClass("active-dropdown");
    }
    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
  /*=====================================
      * Menu Sticky js*
   ======================================*/
  $(function () {
    var header = $(".start-style");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
        header.removeClass("start-style").addClass("scroll-on");
      } else {
        header.removeClass("scroll-on").addClass("start-style");
      }
    });
  });
  /*=====================================
      *popup-Video section Start*
   ======================================*/
  $("#popup-youtube").magnificPopup({
    disableOn: 700,
    type: "iframe",
    preloader: true,
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: "auto",
    closeBtnInside: true,
    midClick: true,
    removalDelay: 160,
    mainClass: "my-mfp-slide-bottom",
  });
  /*=====================================
 		*Background img portfolio*
 	======================================*/
  $(function () {
    $(".set-bg").each(function () {
      var bg = $(this).data("setbg");
      $(this).css("background-image", "url(" + bg + ")");
    });
    /*======================================
            Portfolio layout
    =======================================*/
    var port_fi = $(".portfolios-area .first-item"),
      port_si = $(".portfolios-area .second-item"),
      port_intro_h = $(".portfolio-intro").innerHeight();

    if ($(window).width() > 991) {
      port_fi.appendTo(".portfolio-intro");
      port_si.find(".portfolio-item").height(port_intro_h + 601);
    }

    $(".portfolio-item.pi-style2").each(function () {
      var pi_width = $(this).width();
      $(this).height(pi_width + 50);
    });
  });

  /*=====================================
      *mixitup*
   ======================================*/

  var containerEl = document.querySelector(".portfolios-area");
  var mixer = mixitup(containerEl);

  /*====================================
     		Popup
   =====================================*/
  //  $(".portfolio-item").magnificPopup({
  //    type: "image",
  //    mainClass: "img-popup-warp",
  //    removalDelay: 400,
  //  });

  /*==========================================
   bootstrap Tabs JS
   ============================================ */
  var triggerTabList = [].slice.call(document.querySelectorAll("#myTab a"));
  triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl);
    triggerEl.addEventListener("click", function (event) {
      event.preventDefault();
      tabTrigger.show();
    });
  });
  /*==============================================
  owlCarousel
  ================================================ */
  $(".owl-award").owlCarousel({
    items: 3,
    stagePadding: 30,
    smartSpeed: 1250,
    center: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 2,
      },
    },
  });
  $(".owl-testimonial").owlCarousel({
    items: 3,
    margin: 30,
    stagePadding: 30,
    smartSpeed: 1250,
    center: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  });

  /*==============================================
  Wow Js
  ================================================ */
  $(window).on("load", function () {
    // WOW JS
    if ($(".wow").length) {
      var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 20,
        mobile: false,
        live: true,
      });
      wow.init();
    }
  });
  /*=====================================
      * Menu Scroll js*
   ======================================*/
  smartScroll.init(
    {
      speed: 1500,
      addActive: true, // default true
      activeClass: "active", // default active
      offset: 150, // default 100
    },
    function () {
      console.log("callback");
    }
  );
})(jQuery);
