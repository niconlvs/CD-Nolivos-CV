// JavaScript functionality

// Handle welcome page interactions
document.getElementById("go-btn").addEventListener("click", function () {
    const name = document.getElementById("username").value;
    const language = document.getElementById("language").value;

    if (name) {
        localStorage.setItem("name", name);
        localStorage.setItem("language", language);
        window.location.href = "main.html";
    } else {
        alert("Please enter your name.");
    }
});

// Handle main page greeting
if (window.location.pathname.includes("main.html")) {
    const name = localStorage.getItem("name");
    const greeting = document.getElementById("greeting");

    if (name) {
        greeting.innerText = `Hola, ${name}. Bienvenido/a a mi currículum.`;
    }

    // Navigation between sections
    const navButtons = document.querySelectorAll("nav button");
    const sections = document.querySelectorAll(".section");

    navButtons.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            sections.forEach(section => section.classList.remove("active"));
            sections[index].classList.add("active");
        });
    });
}
