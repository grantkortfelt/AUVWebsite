document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    // Create navigation bar
    const nav = document.createElement("nav");
    nav.style.display = "flex";
    nav.style.justifyContent = "space-around";
    nav.style.backgroundColor = "#333";
    nav.style.padding = "1rem";

    const tabs = ["About", "Electrical", "Mechanical", "Software", "Documentation", "Donate"];
    const content = {
        About: "Welcome to the WPI AUV Team! We are a group of students passionate about autonomous underwater vehicles.",
        Electrical: "The Electrical team focuses on designing and building the electronic systems for the AUV.",
        Mechanical: "The Mechanical team is responsible for the physical design and construction of the AUV.",
        Software: "The Software team develops the code that powers the AUV's autonomous capabilities.",
        Documentation: "We maintain detailed documentation of our projects and processes.",
        Donate: "Support our team by donating! Your contributions help us achieve our goals and participate in competitions."
    };

    const contentDiv = document.createElement("div");
    contentDiv.style.padding = "2rem";
    contentDiv.textContent = content.About;

    tabs.forEach(tab => {
        const button = document.createElement("button");
        button.textContent = tab;
        button.style.color = "white";
        button.style.backgroundColor = "#333";
        button.style.border = "none";
        button.style.cursor = "pointer";
        button.style.fontSize = "1rem";

        button.addEventListener("click", () => {
            contentDiv.textContent = content[tab];
        });

        button.addEventListener("mouseover", () => {
            button.style.color = "#FFD700";
        });

        button.addEventListener("mouseout", () => {
            button.style.color = "white";
        });

        nav.appendChild(button);
    });

    app.appendChild(nav);
    app.appendChild(contentDiv);
});