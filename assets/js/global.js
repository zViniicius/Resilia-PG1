$(() => {
  //Automatic update tag <title> in <head>
  {
    let path = window.location.pathname
      .toUpperCase()
      .replace(/(\.\w*)/g, '')
      .split('/');
    $('title').text(path[1] + ` - AustBurger`);
  }

  //Automatic update Year in copyright footer
  {
    const year = () => new Date().getFullYear();
    $('#copyAno').text(year());
  }
});

/* =============INICIO JS HEADER============= */
$('#btnNav').on('click', () => {
  let btnNav = $('#btnNav');
  let navBar = $('.navBar'),
    navBH = navBar.height();

  navBar.toggleClass('show'); //Add .show class to navBar // Adicione a classe .show no elemento NavBar
  btnNav.toggleClass('open'); //Add .open class to navBar // Adicione a classe .open no elemento NavBar

  // Animations LogoHeader
  $('.navLinks').toggleClass('mobile'); //Add .mobile class to navBar // Adicione a classe .mobile no elemento NavBar
  $('#logoHeader').animate({ top: navBH == '80' ? '0' : '25px' }); // Animation to move logo e Navbar // Animação para mover o logo e a NavBar
  $('#logoHeader').animate({ width: navBH == '80' ? '5em' : '7em' }); // Animation to move logo e Navbar // Animação para mover o logo e a NavBar
  $('main').animate({ marginTop: navBH == '80' ? '80px' : '0' }, 1000);

  // Animations to Open and Close navBar
  let text = btnNav.text();
  let fsize = btnNav.css('fontSize');
  btnNav.text(text == '☰' ? '⋘' : '☰');
  btnNav.animate({ fontSize: fsize == '32px' ? '1.4em' : '2em' });
});

//Func to set attr CSS from Jquery // Setar dinamicamente as os atributos dos elementos via CSS (Header)
$('.toggleCart').on('click', e => {
  e.stopPropagation();
  e.stopImmediatePropagation();
  // Toggle function to show and hide navbar in mobile scren  //
  if ($('.cart').attr('aria-expanded') == 'false') {
    $('.cart').css('width', '250px');
    $('main').css({ 'margin-right': '250px', filter: 'blur(4px)' });
    $('.backdrop').css({
      'z-index': '-1',
      opacity: '1',
      background: 'rgba(17, 17, 17, 0.76)',
    });
    $('.cart').attr('aria-expanded', 'true');
  } else {
    $('.cart').css('width', '0');
    $('main').css({ 'margin-right': '0', filter: 'blur(0)' });
    $('.backdrop').css({
      'z-index': '-1',
      opacity: '1',
      background: 'transparent',
    });
    $('.toggleCart').css('z-index', 3);
    $('.cart').attr('aria-expanded', 'false');
  }
});
