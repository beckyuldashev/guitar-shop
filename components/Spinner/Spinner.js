class Spinner {
  handleSpinnerRemove() {
    ROOT_SPINNER.innerHTML = '';
  }

  render() {
    let html = `
      <div class="spinner-container">
        <img class="spinner__icon" src="components/Spinner/img/sneaker.gif" width=100 height=100>
      </div>
    `;

    ROOT_SPINNER.innerHTML = html;
  }
}

const spinnerPage = new Spinner();