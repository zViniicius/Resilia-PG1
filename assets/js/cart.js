// ============INICIO CARRINHO ============//
// Open Cart

$(function () {
  // array cart to get items positions index
  let cart = [];
  item = 1;
  window.setTimeout(function () {
    $('.btn.cart-add').click(function (product, price) {
      $('#openCart').css('opacity', 1);

      // Get product attribute from each product // Retorna o atributo product de cada card.
      product = $(this).attr('product');

      // Get price attribute from each product // Retorna o atributo price de cada card.
      price = $(this).attr('price');

      // If product is already in cart, increase the quantity // Se o produto já estiver no carrinho, aumenta a quantidade.
      if (cart.includes(product)) {
        var qtd = $(`#item${item} #cartQtd`).val();
        qtd++;
        $(`#item${item} #cartQtd`).val(qtd);
        $(this).text(`CARRINHO: ${qtd}un`);
      } else {
        item++;

        //Template string for append to .ItemList UL in main section of body cart / Template para anexar na UL do carrinho.
        $('.itemList').append(` 
        <li id="item${item}">
        <div class="line"></div>
          <h3>${product}</h3>
                    <span class="infoPriceCart">R$${price}</span>
                    <span class="controlsCart">
                      <span class="btnQtd remove" id="btnQtd-"></span>
                     <input type="number" id="cartQtd" value="1" min="1" max="10" >
                    <span class="btnQtd add" id="btnQtd+"></span>
                    </span>
                      </li>`);
        // Insert a product into the array for each click request // Insira os produtos obtidos na array carrinho.
        cart.push(product);
        $('.badgeCart').text(cart.length);
        // Change button text and class to indicate that the product has been added // Altera o texto do botão e a classe para indicar que o produto foi adicionado.
        $(this).removeClass('cart-add').addClass('check').text('Adicionado!');
      }
      setTimeout(() => {
        let qtdInCart = $(`#item${item} #cartQtd`).val();

        $(this)
          .removeClass('check')
          .addClass('cart-add')
          .text(`CARRINHO: ${qtdInCart}un`);
      }, 1000);

      //Handler functions // Func para incrementar/reduzir a qtd de produto no carrinho.
      $('.btnQtd.add').on('click', function () {
        let plus = $(this).prev().val();
        plus++;
        $(this).prev().val(plus);
      });
      $('.btnQtd.remove').on('click', function () {
        let minus = $(this).next().val();

        //If qtd < 1, remove item from cart // Se a quantidade do item for menor que 1, remova do carrinho
        if (minus <= 1) {
          $(this).closest('li').remove();
          cart.pop(product);
        } else {
          minus--;
          $(this).next().val(minus);
        }
      });
    });
  }, 2000);
});
