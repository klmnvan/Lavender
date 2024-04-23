const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function() {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const nameInput = document.getElementById('name');
    const apartmentlInput = document.getElementById('apartment');
    const framelInput = document.getElementById('frame');
    const homeInput = document.getElementById('home');
    const streetInput = document.getElementById('street');
    const cityInput = document.getElementById('city');

    if (emailInput.value === '' || phoneInput.value === '' || nameInput.value === '' || apartmentlInput.value === ''
    || framelInput.value === '' || homeInput.value === ''  || streetInput.value === '' || cityInput.value === '') {
        alert('Пожалуйста, заполните все поля формы!');
    } else {
        alert('Оплачено!');
        window.location.href = 'index.html';
    }
});
