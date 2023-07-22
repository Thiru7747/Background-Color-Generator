const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const changebtn = document.querySelector('.btn')
const colorcode = document.querySelector('.colorcode')


changebtn.addEventListener('click', function () {
    let hexcode = '#'
    for (let i = 0; i < 6; i++) {
        hexcode += hex[generateRandom()]
    }
    colorcode.textContent = hexcode
    colorcode.style.color = hexcode
    document.body.style.backgroundColor = hexcode

})

function generateRandom() {
    return Math.floor(Math.random() * hex.length);
}