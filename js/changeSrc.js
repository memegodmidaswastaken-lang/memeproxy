// Example: hide iframe on click
const hider = document.querySelector('.hider');
if (hider && iframe) {
    hider.addEventListener('click', () => {
        iframe.style.display = 'none';
    });
}
