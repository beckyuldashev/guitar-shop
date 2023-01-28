class Products {
  constructor() {
    this.activeClassName = 'products-element__btn--active';
    this.labelAdd = 'Добавить в корзину';
    this.labelRemove = 'Удалить из корзины';
  }

  handleSetLocationStorage(element, id) {
    const {isPushed, products} = localStorageUtil.putProduct(id);
    if(isPushed) {
      element.classList.add(this.activeClassName);
      element.textContent = this.labelRemove;
    } else {
      element.classList.remove(this.activeClassName);
      element.textContent = this.labelAdd;
    }

    headerPage.render(products.length);
  }

  render() {
    const productStore = localStorageUtil.getProducts();
    let htmlCatalog = '';

    CATALOG.forEach(({id, name, price, img}) => {
      let activeClass = '';
      let activeText = this.labelAdd;

      if(productStore.includes(id)) {
        activeClass = ' ' + this.activeClassName;
        activeText = this.labelRemove;
      }

      htmlCatalog += `
        <li class = "products-element">
          <span class="products-element__name">${name}</span>
          <img class="products-element__img" src="${img}">
          <span class="products-element__price">🔥 ${price.toLocaleString()}₽</span>
          <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')">${activeText}</button> 
        </li>
      `;
    });

    let html = `
      <ul class="products-container">
        ${htmlCatalog}
      </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
