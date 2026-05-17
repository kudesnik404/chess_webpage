import { createMarquee } from './marquee.js';

const texts = [
    'Дело помощи утопающим — дело рук самих утопающих!',
    'Шахматы двигают вперед не только культуру, но и экономику!',
    'Лед тронулся, господа присяжные заседатели!',
    'Дело помощи утопающим — дело рук самих утопающих!',
    'Шахматы двигают вперед не только культуру, но и экономику!',
    'Лед тронулся, господа присяжные заседатели!',
    'Дело помощи утопающим — дело рук самих утопающих!',
    'Шахматы двигают вперед не только культуру, но и экономику!',
    'Лед тронулся, господа присяжные заседатели!',
];

document.querySelectorAll('.marquee-id').forEach(container => {
    container.appendChild(createMarquee(texts));
});

// text reveal
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.text-reveal');

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');

                // animate only once
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));
});forEach(el => observer.observe(el));