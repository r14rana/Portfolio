// Optional JavaScript for enhanced interactivity, not necessary for basic dropdown functionality
document.addEventListener('DOMContentLoaded', (event) => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            dropdown.querySelector('.dropdown-content').classList.toggle('show');
        });
    });

    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            const dropdownContents = document.querySelectorAll('.dropdown-content');
            dropdownContents.forEach(content => {
                if (content.classList.contains('show')) {
                    content.classList.remove('show');
                }
            });
        }
    }
});
