import products from './json/produtos.json' assert { type: 'json' };

$(document).ready(async () => {
  // Get products list in products imported from JSON
  let productList = Object.values(products);

  // Product list interaction to generate each product card
  for (let prod of productList) {
    // Template of Card-product ready
    $('.cardList').append(`<div class="card flex-column">
  <div class="card-body flex-column">
  <img src="${prod.img}" alt="${prod.produto}">
    <h2>${prod.produto}</h2>
    <p class="card-text">${prod.descricao}</p>
  </div>
  <div class="card-footer"><p>R$${prod.preco}</p>
    <button href="#" class="btn cart-add"><i class="bi bi-cart-check"></i>Comprar</button></div>
</div>`);
  }
});



