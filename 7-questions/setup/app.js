//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
  const btn = question.querySelector(".question-btn");
  //console.log(btn);

  btn.addEventListener('click', function() {

    questions.forEach(function(items) {
        if(question != items) {
          items.classList.remove('show-text')
        }
    })

    question.classList.toggle('show-text')
  });
});


// traversing the dom

// const btns = document.querySelectorAll(".question-btn");
// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         console.log(btn)
    
//         const question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text')
//     })
// })