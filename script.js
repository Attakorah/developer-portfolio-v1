const currentYear = new Date().getFullYear();

const footer = document.querySelector("footer p");

footer.textContent = `© ${currentYear} Attakorah Emmanuel. All rights reserved.`;

const filterButtons = document.querySelectorAll(".filter-buttons button");
const projectCards = document.querySelectorAll("#projects article");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedFilter = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        projectCards.forEach(project => {
            const projectCategory = project.dataset.category;

            if (selectedFilter === "all" || selectedFilter === projectCategory) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
});