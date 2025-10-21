// Dynamic search filter for facts
const searchBar = document.getElementById('searchBar');
const factItems = document.querySelectorAll('.fact-item');

searchBar.addEventListener('input', () => {
  const query = searchBar.value.toLowerCase();

  factItems.forEach(item => {
    const text = item.innerText.toLowerCase();
    if (text.includes(query)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});


