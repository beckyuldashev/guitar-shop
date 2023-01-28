class Header {
  render(count) {
    let html = `
      <header class="header-container">
        <div class="header-count" onclick="shoppingPage.render()">✨ ${count}</div>
      </header>
    `;

    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();
