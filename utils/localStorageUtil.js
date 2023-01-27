class LocalStorageUtil {
  constructor() {
    this.keyName = 'products';
  }

  getProducts() {
    return localStorage.getItem(this.keyName) ? JSON.parse(localStorage.getItem(this.keyName)) : [];
  }

  putProduct(id) {
    const products = this.getProducts();
    let isPushed = false;
    const index = products.indexOf(id);

    if(index >= 0) {
      products.splice(index, 1);
    } else {
      products.push(id);
      isPushed = true;
    }

    localStorage.setItem(this.keyName, JSON.stringify(products));
  
    return {
      isPushed,
      products
    };
  }
}

const localStorageUtil = new LocalStorageUtil();