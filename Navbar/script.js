// classList - shows/gets all classes
// contains - checks all classes for specific classes
// add - add classes
//  remove - removes classes
//  toggle - toggles from add and remove

const navToggle  = document.querySelector('.nav-toggle');
const links  = document.querySelector('.links');

navToggle.addEventListener('click', function() {
    // console.log(links.classList.contains('random'));
    // console.log(links.classList.contains('links'));
    // if (links.classList.contains("show-links")) {
    //     links.classList.remove('show-links');
    // } else {
    //     links.classList.add('show-links');

    // }
    links.classList.toggle('show-links');
});
