// ============INICIO CARRINHO ============//
// Open Cart
function opencart() {
  $('#cart').addClass('open');
}

// Close Cart
function closecart() {
  $('#cart').removeClass('open');
}

// Diminuir Qtd Item carrinho
function downQtd() {
  let qtd = $('#cartQtd').val();
  if (qtd <= 1) {
    // Lembrar de adicionar funçao para remover se for menor que 1
    $('#cartQtd').val(1);
  } else {
    qtd--;
    $('#cartQtd').val(qtd);
  }
}

// Aumentar Qtd Item carrinho
function upQtd() {
  let qtd = $('#cartQtd').val();
  qtd++;
  $('#cartQtd').val(qtd);
}
