class ErrorNotification {
  render() {
    const html = `
      <div class="error-container">
        <div class="error__message">
          <h3>Что-то пошло не так!</h3>
          <p>Попробуйте позже</p>
        </div>
      </div>
    `;

    ROOT_ERROR.innerHTML = html;
  }
}

const errorNotificationPage = new ErrorNotification();