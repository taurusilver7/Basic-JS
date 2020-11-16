
// traversing the DOM

// const btns = document.querySelectorAll('.qstn-btn');

// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         const qstn = e.currentTarget.parentElement.parentElement;
//         qstn.classList.toggle('show-text');
//     });
// });

// using selectors inside the element

const question = document.querySelectorAll('.question');

question.forEach(function(qstn) {
    // console.log(qstn);
    const btn = qstn.querySelector('.qstn-btn');
    btn.addEventListener('click', function() {
        // to close the open qstn when anthr qstn is selected
        question.forEach(function(item) {
            // console.log(item);
            if(item !== qstn) {
                item.classList.remove('show-text');
            }
        });
        qstn.classList.toggle('show-text');
    })
});