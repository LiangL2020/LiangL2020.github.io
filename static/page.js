function renderProjects(category) {

    const container =
        document.getElementById("projects-container");

    projects[category].forEach((project, index) => {

        const theme =
            index % 2 === 0
                ? "section-dark"
                : "section-light";

        container.innerHTML += `
            <section id="${project.id}" class="section ${theme}">
                <h2>${project.title}</h2>
                <article class="project">
                    <p>${project.overview}</p>

                    <h3>The Challenge</h3>
                    <p>${project.challenge}</p>

                    <h3>What I Built</h3>
                    <p>${project.built}</p>
                
                    <h3>Key Contributions</h3>
                    <ul>
                        ${project.contributions
                            .map(t => `<li>${t}</li>`)
                            .join("")}
                    </ul>
                
                    <h3>Technologies</h3>
                    <p>${project.technologies}</p>
                </article>
            </section>
        `;
    });
}