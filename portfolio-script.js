document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche l'envoi classique du formulaire

    // Récupération des valeurs du formulaire
    const name = document.getElementById("name").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Vérification des champs
    if (!name || !prenom || !email || !message) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Validation de l'email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Veuillez entrer une adresse e-mail valide.");
        return;
    }

    // Construction du mailto avec les données du formulaire
    const mailtoLink = `mailto:youmnarakotovao@gmail.com?subject=Contact%20depuis%20le%20Portfolio&body=Nom:%20${encodeURIComponent(name)}%0APrénom:%20${encodeURIComponent(prenom)}%0AEmail:%20${encodeURIComponent(email)}%0A%0AMessage:%20${encodeURIComponent(message)}`;

    // Ouvrir la messagerie avec mailto
    window.location.href = mailtoLink;
});