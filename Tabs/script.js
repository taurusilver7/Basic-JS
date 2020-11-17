

const btn = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(event) {
    // to find the buttons from the div through dataset.
    const id = event.target.dataset.id;
    
    if(id) {

        // if id is a value, it a button, if undefined, not a button
        // remove active from all other buttons except the clicked.

        btn.forEach(button => {
            // removes active from all buttons
            button.classList.remove('active');
            // adds active to clicked button.
            event.target.classList.add('active'); 
        });

        // hide other articles nd display only with matching id.
        articles.forEach(article => {
            // removes articles content from display
            article.classList.remove('active');
        })

        const element = document.getElementById(id);
        // display only the content with matching id.
        element.classList.add('active');
    }
    
});