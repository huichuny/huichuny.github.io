document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    toggleBtn.addEventListener('click', () => {
      sidebar.style.display = (sidebar.style.display === 'block') ? 'none' : 'block';
    });
});
