console.log('test');

var value = 'value';

console.log(value);

var button = document.getElementById('button-id');

var popup = document.getElementById('popup-id');

console.log(button, popup);

console.log(button.textContent);

button.addEventListener('click', function () {
    popup.classList.toggle('hide')
});
