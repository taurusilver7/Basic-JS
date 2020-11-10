
// set initial count
let count = 0;

// select value & buttons
const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('dec')) {
            count--;
        } else if(styles.contains('inc')) {
            count++;
        } else {
            count = 0;
        }
        if(count>0) {
            value.style.color = 'green';
        }
        if(count<0) {
            value.style.color = 'red';
        }
        if(count===0) {
            value.style.color = 'black';
        }
        value.textContent = count;
    })
})
