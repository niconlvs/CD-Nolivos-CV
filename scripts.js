document.getElementById('submit-button').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const language = document.getElementById('language').value;

    if (name && language) {
        const url = `profile.html?name=${encodeURIComponent(name)}&language=${encodeURIComponent(language)}`;
        window.location.href = url;
    } else {
        alert('Por favor, complete todos los campos.');
    }
});

// Personalizar el saludo en el perfil
const params = new URLSearchParams(window.location.search);
const userName = params.get('name');
const userLang = params.get('language');

if (userName) {
    document.getElementById('user-name').textContent = userName;
}

if (userLang === 'en') {
    document.title = "Personal Profile";
    document.querySelector('header h1').textContent = `Hello, ${userName}. Welcome to my CV.`;
    document.querySelectorAll('nav ul li a')[0].textContent = "Profile";
    document.querySelectorAll('nav ul li a')[1].textContent = "Experience";
    document.querySelectorAll('nav ul li a')[2].textContent = "Education";
    document.querySelectorAll('nav ul li a')[3].textContent = "Contact";
}
