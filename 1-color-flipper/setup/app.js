const hexa = ['#566D7E', '#0041C2', '#6960EC', '#1589FF', '#38ACEC', '#50EBEC', '#81D8D0', '#46C7C7', '#7BCCB5', '#3EA99F', '#438D80', '#307D7E', '#008080', '#4E8975'];
const names = ['Marble Blue', 'Blueberry Blue', 'Blue Lotus', 'Dodger Blue', 'Butterfly Blue', 'Celeste', 'Tiffany Blue', 'Jellyfish', 'Blue green', 'Light Sea Green', 'Sea Turtle Green', 'Greenish Blue', 'Teal', 'Sea Green']

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomNumber = getRandomNumber();
    console.log(hexa[randomNumber])
    const newColor = hexa[randomNumber];

    document.querySelector('body').style.backgroundColor = newColor;
    color.textContent = names[randomNumber];
})


function getRandomNumber() {
    return Math.floor(Math.random() * hexa.length);
}