const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {

    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards"});

});

document.addEventListener('DOMContentLoaded', () => {
    const filterSelect = document.getElementById('filter-select');
    const projects = document.querySelectorAll('.project');

    filterSelect.addEventListener('change', () => {
        const filter = filterSelect.value;
        
        projects.forEach(project => {
            if (filter === 'all') {
                project.style.display = 'block';
            } else {
                const categories = project.getAttribute('data-category').split(' ');
                if (categories.includes(filter)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            }
        });
    });
});