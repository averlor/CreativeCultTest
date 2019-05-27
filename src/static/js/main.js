let btn = document.getElementById('btn');
let prev = document.getElementById('prev');

let handler = () => {
    alert('Hello');
}

prev.addEventListener('click', handler);
btn.addEventListener('click', handler);