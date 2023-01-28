class Shopping {
  handlerCloseShoppingPage() {
    ROOT_SHOPPING.innerHTML = '';
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';
    let sum = 0;

    CATALOG.forEach(({id, name, price}) => {
      if(productsStore.includes(id)) {
        htmlCatalog += `
          <tr class="shopping-element">
            <td class="shopping-element__name">⚡️ ${name}</td>
            <td class="shopping-element__price">${price.toLocaleString()}₽</td>
          </tr>
        `;
      }

      sum += price;
    });

    let html = `
      <div class="shopping-container">
        <table>
          ${htmlCatalog}

          <tr class="shopping-element">
            <td class="shopping-element__name">🌟 Сумма:</td>
            <td class="shopping-element__price">${sum.toLocaleString()}₽</td>
          </tr>
        </table>

        <button class="shopping-close" onclick="shoppingPage.handlerCloseShoppingPage();"></button>
      </div>
    `;

    ROOT_SHOPPING.innerHTML = html;
  }
}

const shoppingPage = new Shopping();