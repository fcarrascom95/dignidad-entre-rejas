function donar() {
    alert("Gracias por tu interés en donar. Pronto habilitaremos una plataforma segura para recibir aportes.");
}

function voluntariado() {
    alert("Gracias por tu interés en ser voluntario. Pronto te contactaremos con más información.");
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("form-message").innerText = "¡Gracias por tu mensaje! Nos pondremos en contacto pronto.";
    this.reset();
});
