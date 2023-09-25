const button = document.querySelector('.button');
const about = document.getElementById('about');

button.addEventListener('click', () => {
    if (about.classList.contains('hidden')) {
        about.classList.remove('hidden');
        about.classList.add('fade-in');
    } else {
        about.classList.remove('fade-in');
        about.classList.add('hidden');
    }
});