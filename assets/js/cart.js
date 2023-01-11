// ============INICIO CARRINHO ============//
// Open Cart

$(function () {
  // array cart to get items positions index
  let cart = [];
  window.setTimeout(function () {
    $('.btn.cart-add').click(function (item, product, price) {
      product = $(this).attr('product'); // Get product attribute from each product // Retorna o atributo product de cada card.
      price = $(this).attr('price'); // Get price attribute from each product // Retorna o atributo price de cada card.
      cart.push(product); // Insert a product into the array for each click request // Insira os produtos obtidos na array carrinho.
      item = cart.indexOf(product); // return the index of the previously inserted product array // Retorna o index do produto no array cart.
     //Template string for append to .ItemList UL in main section of body cart / Template para anexar na UL do carrinho.
      $('.itemList').append(` 
        <div class="line"></div>
        <li id="item${item}">
          
          <h3>${product}</h3>
                    <span class="infoPriceCart">R$${price}</span>
                    <span class="controlsCart">
                      <span class="btnQtd remove" id="btnQtd-"></span>
                     <input type="number" id="cartQtd" value="1" min="1" max="10" >
                    <span class="btnQtd add" id="btnQtd+"></span>
                    </span>
                      </li>`);


    //Handler functions // Func para incrementar/reduzir a qtd de produto no carrinho.
      $('.btnQtd.add').on('click', function () {
        let plus = $(this).prev().val();
        plus++;
        $(this).prev().val(plus);
      });
      $('.btnQtd.remove').on('click', function () {
        let minus = $(this).next().val();

        if (minus <= 1) {
          // Lembrar de adicionar funçao para remover se for menor que 1
          $(this).next().val(0);
          $(this).closest('li').remove();
          $('.toggleCart').click();
        } else {
          minus--;
          $(this).next().val(minus);
        }
      });
    });
  }, 2000);
});
