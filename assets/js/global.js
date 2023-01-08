// Automatic arrow function
$(() => {
  //Automatic update tag <title> in <head>
  {
    let path = window.location.pathname.replace(/[^cardapio]/g, '');
    path = path[0].toUpperCase() + path.substr(1);
    $('title').text(path + ` - AustBurger`);
  }

  //Automatic update Year in copyright footer
  {
    const year = () => new Date().getFullYear();
    $('#copyAno').text(year());
  }
});