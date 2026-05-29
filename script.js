const STORAGE_KEY = 'counterValue';
let count = 0;
const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

function saveCount() {
    localStorage.setItem(STORAGE_KEY, String(count));
}

function animateCount() {
    countDisplay.classList.add('zoom-animation');
    setTimeout(() => {
        countDisplay.classList.remove('zoom-animation');
    }, 300);
}

function loadCount() {
    const storedValue = localStorage.getItem(STORAGE_KEY);
    if (storedValue !== null) {
        const parsed = Number(storedValue);
        if (!Number.isNaN(parsed)) {
            count = parsed;
            //localStorage.getz
        }
    }
    countDisplay.innerText = count;
}

increaseBtn.addEventListener('click', function () {
    count++;
    countDisplay.innerText = count;
    saveCount();
});

decreaseBtn.addEventListener('click', function () {
    if (count > 0) {
        count--;
        countDisplay.innerText = count;
        saveCount();
    }
});

resetBtn.addEventListener('click', function () {
    count = 0;
    countDisplay.innerText = count;
    saveCount();
});

loadCount();