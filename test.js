console.log("test file is running");
localStorage.setItem("name","jonny baba");
let count = 0;
const savedCount=localStorage.getItem("countvalue");
if(savedCount!=null){
    count=Number(savedCount);
}
const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
    countDisplay.innerText = count;
    if (count === 0) {
        countDisplay.style.webkitTextFillColor = "black";
    } else if (count > 0) {
        countDisplay.style.webkitTextFillColor = "yellow";
    } else {
        countDisplay.style.webkitTextFillColor = "red";
    }
}

increaseBtn.addEventListener("click", function () {
    count++;
    if (count === 10) {
        alert("count has reached 10");
    }
    updateDisplay();
    localStorage.setItem("countvalue",count);
});

decreaseBtn.addEventListener("click", function () {
    count--;
    updateDisplay();
    localStorage.setItem("countvalue",count);
});

resetBtn.addEventListener("click", function () {
    count = 0;
    updateDisplay();
    localStorage.setItem("countvalue",count);
});

// Initialize display on load
updateDisplay();

