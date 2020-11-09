// Local review data 

const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text: "I'm a baby meggings twee health goth +1. Bicycle rights tumeric charteauses before sold out chambary pop-p. Shaman humblebrag pickled coloring book salsvia hoodie."
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-2_np9x5l.jpg',
        text: "Helvatica loren ipsum dolor sit amet consectetur adipisicing elit. Eum quidem obcaecati iure! Ad, praesentium aliquam."
    },
    {
        id: 3,
        name: 'peter johnes',
        job: 'intern',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-4_t9nxjt.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem obcaecati iure! Ad, praesentium aliquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem obcaecati iure! Ad, praesentium aliquam.'
    },
    {
        id: 4,
        name: 'jacob black',
        job: 'Web developer',
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-3_ipa0mj.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem obcaecati iure! Ad, praesentium aliquam.Lorem ipsum dolor sit amet consectetur adipisicing.'
    }
];

//  select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//  set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentItem);
});


// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

// load next person button
nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length-1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// load prev button
prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

//load random buttom with random method
randomBtn.addEventListener('click', function() {
    const randomNum = Math.floor(Math.random() * reviews.length);
    showPerson(randomNum);
})











