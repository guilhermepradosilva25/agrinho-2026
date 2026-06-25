// =========================
// SCROLL SUAVE
// =========================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =========================
// HEADER DINÂMICO
// =========================
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = '#1b5e20';
        header.style.transition = '0.3s';
    } else {
        header.style.background = '#ffffff';
    }
});

// =========================
// FORMULÁRIO
// =========================
const form = document.getElementById('contact-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (nome === '' || email === '') {
        alert('Preencha todos os campos.');
        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        alert('Digite um e-mail válido.');
        return;
    }

    alert(`Obrigado, ${nome}! Sua inscrição foi realizada com sucesso.`);

    form.reset();
});

// =========================
// ANIMAÇÃO AO APARECER
// =========================
const cards = document.querySelectorAll(
    '.feature-card, .challenges-text, .challenges-image, .contact-container'
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.8s ease';

    observer.observe(card);
});

// =========================
// BOTÃO CTA COM EFEITO
// =========================
const ctaButton = document.querySelector('.cta-button');

ctaButton.addEventListener('mouseenter', () => {
    ctaButton.style.transform = 'scale(1.05)';
});

ctaButton.addEventListener('mouseleave', () => {
    ctaButton.style.transform = 'scale(1)';
});

// =========================
// ANO AUTOMÁTICO NO FOOTER
// =========================
const footerText = document.querySelector('.main-footer p');

footerText.innerHTML =
    `&copy; ${new Date().getFullYear()} AgroSustentável. Todos os direitos reservados.`;
