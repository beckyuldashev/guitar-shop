let CATALOG = [];
const url = 'https://sneakers-145dd-default-rtdb.firebaseio.com/catalog.json';

function render() {
  const productsStore = localStorageUtil.getProducts();
  productsPage.render();
  headerPage.render(productsStore.length);
}

function getData(url) {
  return fetch(url).then(res => res.json());
} 

getData(url)
  .then(data => {
    CATALOG = data;
    render();
  })
  .catch(err => {
    console.log(err);
  });