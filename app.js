const soda = document.getElementById('soda');
const cheese = document.getElementById('cheese');
const grapes = document.getElementById('grapes');
const bread = document.getElementById('bread');
const watermelon = document.getElementById('watermelon');

const button = document.getElementById('button');

soda.addEventListener('click', () => {
    soda.classList.toggle('picked');
});

cheese.addEventListener('click', () => {
    cheese.classList.toggle('picked');
});

grapes.addEventListener('click', () => {
    grapes.classList.toggle('picked');
});

bread.addEventListener('click', () => {
    bread.classList.toggle('picked');
});

watermelon.addEventListener('click', () => {
    watermelon.classList.toggle('picked');
});

button.addEventListener('click', () => {
    const randomNumber = Math.ceil(Math.random() * 5);
    if (randomNumber === 1) {
        soda.classList.toggle('picked');
    } else if (randomNumber === 2) {
        cheese.classList.toggle('picked');
    } else if (randomNumber === 3) {
        grapes.classList.toggle('picked');
    } else if (randomNumber === 4) {
        bread.classList.toggle('picked');
    } else {
        watermelon.classList.toggle('picked');
    }
});