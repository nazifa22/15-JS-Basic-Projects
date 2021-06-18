const btns = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.content')
const about = document.querySelector('.about')

// about.addEventListener('click', function(e) {
//     const id = e.target.dataset.id
//     console.log(id)

//     if(id) {
//         btns.forEach(function(btn) {
//             btn.classList.remove('active')
//         })

//         e.target.classList.add('active')

//         contents.forEach(function(content) {
//             content.classList.remove('active')
//         })

//         const currentElement = document.getElementById(id)
//         currentElement.classList.add('active')
//     }
// })

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        // Getting dataset id of current target
        const id = e.currentTarget.dataset.id

        // If ID exists removing class from other classes
        if(id) {
            btns.forEach(function(button) {
                button.classList.remove('active')
            })
        }
        // Adding class to the current item
        e.currentTarget.classList.add('active')

        // Removing active class from the contents
        contents.forEach(function(content) {
            content.classList.remove('active')
        })
        // Getting ID of the current element
        const currentElement = document.getElementById(id)
        // Setting active class to the current content
        currentElement.classList.add('active')
    })
})