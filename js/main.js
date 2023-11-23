//footer
const d = new Date();
document.getElementById('date').innerHTML = d.getFullYear();
//alert button
function btnAlert() {
    alert('See you next time!');
}
//hover button
document.getElementById('hoverButton').onmouseover = () => {
    document.getElementById('hoverButton').innerText = 'Contact me at +1 123 4567 890';
};

document.getElementById('hoverButton').onmouseleave = () => {
    document.getElementById('hoverButton').innerText = 'Want a coffee chat?';
};
//incrementing button
let count = 0;

document.getElementById('btnCounter').onclick = () => {
    count = count + 1;
    document.getElementById('txtCounter').innerHTML = ('Number: ' + count);

    // Check if the count is even or odd
    if (count % 2 === 0) {
        document.getElementById('txtCounter').classList.remove('even');
        document.getElementById('txtCounter').classList.add('odd');
    } else {
        document.getElementById('txtCounter').classList.remove('odd');
        document.getElementById('txtCounter').classList.add('even');
    }
}
//list
let numbersList = document.getElementById('numbers');

for (let i = 1; i <= 100; i = i + 1) {
    let listItem = document.createElement('li');
    listItem.textContent = 'A' + i;
    numbersList.appendChild(listItem);
}