// Automatic arrow function

$(() => {
  //Automatic update tag <title> in <head>
  {
    let path = window.location.pathname.toUpperCase().replace(/(\.\w*)/g, '').split('/')
    $('title').text(path[1] + ` - AustBurger`);
  }

  //Automatic update Year in copyright footer
  {
    const year = () => new Date().getFullYear();
    $('#copyAno').text(year());
  }
});

$('#btnNav').on('click', () => {
  let btnNav = $('#btnNav');
  let navBar = $('.navBar'),
    navBH = navBar.height();

  navBar.toggleClass('show');
  btnNav.toggleClass('open');

  // Animations LogoHeader
  $('.navLinks').toggleClass('mobile');
  $('#logoHeader').animate({ top: navBH == '80' ? '0' : '25px' });
  $('#logoHeader').animate({ width: navBH == '80' ? '5em' : '7em' });

  // Animations to Open and Close navBar
  let text = btnNav.text();
  let fsize = btnNav.css('fontSize');
  btnNav.text(text == '☰' ? '⋘' : '☰');
  btnNav.animate({ fontSize: fsize == '32px' ? '1.4em' : '2em' });
});
