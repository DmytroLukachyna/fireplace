$(document).ready(function () {
  $('.tabs__wrapper').tabslet();
  $('[data-fancybox]:not(.slick-cloned)').fancybox({
    autoFocus: false,
    errorTpl:
      '<div class="fancybox-error"><p>Приносим извинения, произошла ошибка. Мы уже работаем над ее исправлением!</p></div>',
    buttons: ['zoom', 'close'],
  });
  $('.gallery__link').fancybox({
    touch: false,
    keyboard: false,
    arrows: false,
    errorTpl:
      '<div class="fancybox-error"><p>Приносим извинения, произошла ошибка. Мы уже работаем над ее исправлением!</p></div>',
    buttons: ['zoom', 'close'],
  });
  $('.gallery__carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: true,
    prevArrow:
      '<div class="arrow arrow_left"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg></div>',
    nextArrow:
      '<div class="arrow arrow_right"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></div>',
    accessibility: false,
    focusOnSelect: false,
    appendDots: '.gallery__dots',
    dotsClass: 'dot',
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 624,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $('.input__number').mask('+99 (999) 999-99-99', {
    translation: {
      9: { pattern: /[0-9]/ },
    },
  });
  $('.input__number').focusin(function () {
    if ($(this).val().length === 0) {
      $(this).val('+38 (0');
    }
  });
  $('.input__number').focusout(function () {
    if ($(this).val().length < 7) {
      $(this).val('');
    }
  });
  $('.modal__form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'mailer/form.php',
      data: $(this).serialize(),
    }).done(function () {
      $(this).find('input').val('');
      $('.modal__form').trigger('reset');
      $('.thanks').fadeIn('fast');
      parent.$.fancybox.close();
      setTimeout(function () {
        $('.thanks').fadeOut('slow');
      }, 2500);
    });
    return false;
  });
  var modalOnTimer = setTimeout(function () {
    $.fancybox.open({
      src: '#zamer',
    });
  }, 40000);
  $('[data-src]').on('click', function () {
    clearTimeout(modalOnTimer);
  });
});
