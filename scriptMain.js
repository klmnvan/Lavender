const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
    event.preventDefault();
    const phoneInput = document.getElementById('phone');
    const nameInput = document.getElementById('name');

    if (phoneInput.value === '' || phoneInput.value === '') {
        alert('Пожалуйста, заполните все поля формы!');
    } else {
        phoneInput.value = ''
        nameInput.value = ''
        alert('Мы вам вскоре позвоним!');
    }
});
