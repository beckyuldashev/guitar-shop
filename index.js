(() => {
  const productsStore = localStorageUtil.getProducts();
  productsPage.render();
  headerPage.render(productsStore.length);
})();