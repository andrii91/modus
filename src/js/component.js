$(document).ready(function () {

  $('.search label .icon-search').click(function () {
    $(this).parent().find('input').slideToggle(0);
    $(this).parent().toggleClass('active');
    $(this).parents('.col').find('.menu').toggleClass('search-hide');
  });
  $('.head-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: false,
    responsive: {
      0: {
        items: 1,
      }
    }
  });
  var clients = $('.clients-carousel');
  clients.owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      }
    }
  });
  $('.prev.btn').click(function () {
    clients.trigger('prev.owl.carousel');

  });
  $('.next.btn').click(function () {
    clients.trigger('next.owl.carousel');
  });

  $('.mob-btn').click(function () {
    $('.menu').slideToggle();
  });
  if ($(window).width() < 1024) {
    $('.menu li').click(function () {
      $('.menu').hide();
    });
  }

});