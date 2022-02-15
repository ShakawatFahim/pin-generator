function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.lenght == 4) {
        return pin;
    }
    else {
        return pin;
    }
}
function generatePin() {
    const dispin = getPin();
    document.getElementById('dispin').value = dispin;
}
document.getElementById('calcu').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calInput = document.getElementById('numType');
    if (isNaN(number)) {
        if (number == "C") {
            calInput.value = '';
        }
    }
    else {

        const preCal = calInput.value;
        const newCal = preCal + number;
        calInput.value = newCal;
    }
})
function verifyPin() {
    const pin = document.getElementById('dispin').value;
    const typePin = document.getElementById('numType').value;
    const right = document.getElementById('right');
    const wrong = document.getElementById('wrong');
    if (pin == typePin) {
        wrong.style.display = 'none';
        right.style.display = 'block';
    }
    else {
        right.style.display = 'none';
        wrong.style.display = 'block';
    }
}