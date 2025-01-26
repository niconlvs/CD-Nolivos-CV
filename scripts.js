document.getElementById('submit-button').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const language = document.getElementById('language').value;

    if (name && language) {
        // Redirige a la página del currículum con los parámetros de nombre e idioma
        const url = `curriculum.html?name=${encodeURIComponent(name)}&language=${encodeURIComponent(language)}`;
        window.location.href = url;
    } else {
        alert('Por favor, completa tu nombre y selecciona un idioma.');
    }
});

// Personalizar el saludo en curriculum.html
const params = new URLSearchParams(window.location.search);
const userName = params.get('name');
const userLang = params.get('language');

if (userName) {
    document.getElementById('user-name').textContent = userName;
}

// Opcional: Cambiar idioma dinámicamente (si deseas hacerlo)
if (userLang === 'en') {
    document.title = "Resume";
    document.querySelector('header h1').textContent = `Hello, ${userName}. Welcome to my resume.`;
    document.querySelectorAll('.top-nav button')[0].textContent = "Profile";
    document.querySelectorAll('.top-nav button')[1].textContent = "Experience";
    document.querySelectorAll('.top-nav button')[2].textContent = "Education";
    document.querySelectorAll('.top-nav button')[3].textContent = "Contact";
}

