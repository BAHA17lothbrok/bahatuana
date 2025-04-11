
const gifList = ["kedi1.gif", "kedi2.gif"];
let current = 0;

setInterval(() => {
    current = (current + 1) % gifList.length;
    document.getElementById("kediGif").src = gifList[current];
}, 4000);



document.getElementById('evetBtn').addEventListener('click', function() {
    window.location.href = 'evet.html';
});

const hayirBtn = document.getElementById('hayirBtn');
let moveCount = 0;
hayirBtn.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * 300) - 150;
    const y = Math.floor(Math.random() * 300) - 150;
    hayirBtn.style.transform = `translate(${x}px, ${y}px)`;
    moveCount++;
    if (moveCount > 10) {
        hayirBtn.innerText = "HAYIIIIIR";
    }
});
