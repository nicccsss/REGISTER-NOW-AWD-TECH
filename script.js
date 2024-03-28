

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.typing').forEach((element) => {
        element.innerHTML = [...element.textContent]
            .map((char, i) => `<span style="animation: typing 5s steps(40) forwards ${i * 0.1}s">${char}</span>`)
            .join('');
    });
});

document.getElementById("googleBtn").addEventListener("click", function() {
    // Redirect to Google authentication page
    window.location.href = "https://accounts.google.com/";
});

document.getElementById("facebookBtn").addEventListener("click", function() {
    // Redirect to Facebook authentication page
    window.location.href = "https://www.facebook.com/";
});
