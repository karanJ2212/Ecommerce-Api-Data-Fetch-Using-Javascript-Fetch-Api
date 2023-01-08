document.addEventListener("DOMContentLoaded", function () {
  const getData = async (url) => {
    let response = await fetch(url);
    let data = await response.json();

    for (let i = 0; i < data.length; i++) {
      document.querySelector(".products").innerHTML += ` <div class="product">
    <img src="${data[i].images[1]}" alt="" class="product-img" />
    <h2 class="product-title">${data[i].title}</h2>
    <h4 class="product-category">${data[i].category.name}</h4>
    <p class="product-description">${data[i].description}</p>
    <div class="product-price-container">
      <h3 class="product-price">${data[i].price}</h3>
      <a href="#" data-productId="${data[i].id}" class="add-to-cart"></a>
    </div>
  </div>`;
    }
  };
  getData("https://api.escuelajs.co/api/v1/products");
});
