// Show loading while iframe loads
const iframe = document.querySelector('.frame');
const loading = document.querySelector('.pageLoading');

if (iframe && loading) {
    loading.style.display = 'flex';
    iframe.addEventListener('load', () => {
        loading.style.display = 'none';
    });
}
