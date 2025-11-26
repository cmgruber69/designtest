// script.js
const toggleButton = document.getElementById('btn-toggle-view');
const productList = document.getElementById('product-list');

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        const currentView = toggleButton.getAttribute('data-view');

        if (currentView === 'card') {
            // Alternar para Lista
            productList.classList.add('list-view');
            toggleButton.setAttribute('data-view', 'list');
            toggleButton.textContent = 'Alternar para Card';
        } else {
            // Alternar para Card
            productList.classList.remove('list-view');
            toggleButton.setAttribute('data-view', 'card');
            toggleButton.textContent = 'Alternar para Lista';
        }
    });
}