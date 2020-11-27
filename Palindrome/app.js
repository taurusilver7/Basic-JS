/* A Palindrom is an english word which is the same in the reverse order. A palindrome sentence/ word neglects upper case, special characters, symbols, numerals..*/


const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

palindrom("Eye");

function palindrom(str) {

  // a regex expression to filter out all the symbols in between the letters. W- wide space; g-globally applied.
  var reg = /\W+|_/g;
  
  var refine = str.replace(reg, "").toLowerCase();
  // variable contains word with no spaces in between. Expression is replaced with the regex expression. All capital are turned to lower case.
  
  var reverse = refine.split("").reverse().join("");
  // the string is split to letter, reversed, and joined together.
  // console.log(refine, reverse);

  const card = document.createElement('div')
  card.classList.add('card');

  const cardHTML = `
    <div class="card">
      <p> ${str} is a Palindrome</p>
    </div>  
  `;
  const cardHTMLnot = `
    <div class="card">
      <p> ${str} is not a Palindrome</p>
    </div>
  `;

  
  if (refine == reverse) {
    main.innerHTML = cardHTML;
  } else {
    main.innerHTML = cardHTMLnot;
  }

  //return refine !== reverse ? false: true;

};

form.addEventListener('submit', e => {
  e.preventDefault();

  const user = search.value;

  if(user) {
    palindrom(user);

    search.value = '';
  }
})
