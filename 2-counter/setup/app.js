// var value = document.getElementById('value');

// const resetButton = document.querySelector('.reset');
// const incrementButton = document.querySelector('.increase');
// const decrementButton = document.querySelector('.decrease');
// console.log(decrementButton)

// resetButton.addEventListener('click', function() {
//     value.textContent = 0;
//     value.style.color = '#B1FB17'
// })

// incrementButton.addEventListener('click', function() {
//     value.style.color = 'var(--clr-black)'
//     // console.log(value.innerText++)
//     value.textContent++;
// })

// decrementButton.addEventListener('click', function() {
//     value.style.color = 'var(--clr-black)'
//     if(value.textContent > 0) {
//         value.textContent--;
//     }
// })

let count = 0;
const value = document.getElementById('value');
const btns = document.querySelectorAll('button');   
console.log(btns)

btns.forEach(function(btn) {
    // console.log(btn)

    btn.addEventListener('click', function(e) {
        // console.log('Current target:', e.currentTarget)

        const btnClass = e.currentTarget.classList;
        // console.log(btnClass)

        if(btnClass.contains('decrease') && count > 0) {
            count--;
        }
        else if(btnClass.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }

        value.textContent = count;
    })
})