// Simple form validation script
function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('全ての項目を入力してください。');
    return false;
  }

  alert('お問い合わせありがとうございます！');
  document.getElementById('contact-form').reset();
  return false;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', validateForm);
  }
});
