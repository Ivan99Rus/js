const first = document.querySelector('.button-1');
const second = document.querySelector('.button-2');
const third = document.querySelector('.button-3');
const fourth = document.querySelector('.button-4');
const fifth = document.querySelector('.button-5');

first.addEventListener('click', function() {
    const num = 3;
    alert(num);
});

second.addEventListener('click', function() {
    const a = 10,
        b = 2,
        result = 'Сумма чисел: ' + (a + b) +
        '\nРазность чисел: ' + (a - b) +
        '\nПроизведение чисел: ' + (a * b) +
        '\nЧастное чисел: ' + (a / b);
    alert(result);

});

third.addEventListener('click', function() {
    const с = 15,
        d = 2;
    let result = 0;

    result = с + d;

    alert(result);
});

fourth.addEventListener('click', function() {
    const a = 10,
        b = 2,
        c = 5;

    const result = a + b + c;

    alert(result);
});

fifth.addEventListener('click', function() {
    const a = 17,
        b = 10;

    const c = a - b;
    const d = 7;

    const result = c + d;

    alert(result);
});