// Real search functionality: redirect to Google
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchBar');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload
    const query = searchInput.value.trim();
    if (query) {
        // Open Google search in a new tab
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
});
