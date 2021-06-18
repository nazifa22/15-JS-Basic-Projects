const slides = document.querySelectorAll('.slide')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`
})

let counter = 0

console.log(slides.length)

nextBtn.addEventListener('click', function() {
    if(counter < slides.length) {
        counter++
        slide()
    } 
})

prevBtn.addEventListener('click', function() {
    counter--
    slide()
})

function slide() {
    if(counter < slides.length) {
        nextBtn.style.display = 'block'
    }
    else {
        nextBtn.style.display = 'block'

    }

    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

// prevBtn.style.display = 'none'