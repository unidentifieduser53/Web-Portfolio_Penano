const backToTopBtn = document.getElementById('backToTop');
 
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});
 
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
 
 
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
 
window.addEventListener('scroll', () => {
    let current = '';
 
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
 
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
 
 
// --- 3. Scroll Reveal Animation for Cards ---
const cards = document.querySelectorAll('.card');
 
const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });
 
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    revealOnScroll.observe(card);
});
 
// Triggered when card becomes visible
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `.card.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(style);
});
 
 
// --- 4. Typed Text Effect on Hero Heading ---
const heroHeading = document.querySelector('.hero-text h1');
if (heroHeading) {
    const originalText = heroHeading.textContent;
    heroHeading.textContent = '';
    let i = 0;
 
    function typeWriter() {
        if (i < originalText.length) {
            heroHeading.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 70);
        }
    }
 
    window.addEventListener('load', typeWriter);
}
 
 
// --- 5. Current Year in Footer ---
const footer = document.querySelector('footer p');
if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = footer.innerHTML.replace(/\d{4}/, year);
}
 
 
// --- 6. Scale Activity Previews to Fit Their Cards ---
function scalePreviews() {
    document.querySelectorAll('.activity-card .preview').forEach(preview => {
        const iframe = preview.querySelector('iframe');
        if (iframe) {
            iframe.style.transform = `scale(${preview.clientWidth / 1280})`;
        }
    });
}
 
window.addEventListener('load', scalePreviews);
window.addEventListener('resize', scalePreviews);

// --- 7. Toggle the My Activities list ---
const activitiesToggle = document.getElementById('toggleActivities');
const activitiesList = document.getElementById('activitiesList');

if (activitiesToggle && activitiesList) {
    activitiesList.addEventListener('transitionend', event => {
        if (event.propertyName === 'max-height' &&
            activitiesToggle.getAttribute('aria-expanded') === 'true') {
            activitiesList.style.maxHeight = 'none';
        }
    });

    activitiesToggle.addEventListener('click', () => {
        const isExpanded = activitiesToggle.getAttribute('aria-expanded') === 'true';
        activitiesToggle.setAttribute('aria-expanded', String(!isExpanded));
        activitiesToggle.textContent = isExpanded ? 'Show Activities' : 'Hide Activities';
        activitiesList.setAttribute('aria-hidden', String(isExpanded));

        if (isExpanded) {
            activitiesList.style.maxHeight = `${activitiesList.scrollHeight}px`;
            activitiesList.inert = true;
            void activitiesList.offsetHeight;
            activitiesList.style.maxHeight = '0px';
            activitiesList.style.opacity = '0';
        } else {
            activitiesList.hidden = false;
            activitiesList.inert = false;
            activitiesList.style.maxHeight = '0px';
            activitiesList.style.opacity = '0';
            void activitiesList.offsetHeight;
            activitiesList.style.maxHeight = `${activitiesList.scrollHeight}px`;
            activitiesList.style.opacity = '1';
        }
    });
}

// --- 8. Connect the available project pages to My Activities ---
const activityCards = document.querySelector('#activities .cards');
if (activityCards) {
    const projectLinks = [
        {
            number: 4,
            path: 'project4/index.html',
            description: 'A student portal with registration, grades, and profile pages.'
        },
        {
            number: 5,
            path: 'project5/Site/index.html',
            description: 'A student portal featuring registration, grades, and profile pages.'
        },
        {
            number: 6,
            path: 'project6/index.html',
            description: 'An interactive JavaScript dashboard loading profile, grades, and schedule.'
        }
    ];

    projectLinks.forEach(project => {
        const existingCard = Array.from(activityCards.querySelectorAll('.activity-card'))
            .find(card => card.querySelector('h3')?.textContent.trim() === `Project ${project.number}`);

        if (existingCard) {
            existingCard.querySelectorAll('a, iframe').forEach(link => {
                if (link.tagName === 'IFRAME') {
                    link.src = project.path;
                } else {
                    link.href = project.path;
                }
            });

            const description = existingCard.querySelector('p');
            if (description) {
                description.textContent = project.description;
            }
            return;
        }

        const card = document.createElement('article');
        card.className = 'card activity-card';

        const previewLink = document.createElement('a');
        previewLink.className = 'preview';
        previewLink.href = project.path;
        previewLink.setAttribute('aria-label', `Open Project ${project.number}`);

        const preview = document.createElement('iframe');
        preview.src = project.path;
        preview.title = `Preview of Project ${project.number}`;
        preview.loading = 'lazy';
        preview.tabIndex = -1;
        preview.scrolling = 'no';
        previewLink.appendChild(preview);

        const title = document.createElement('h3');
        title.textContent = `Project ${project.number}`;

        const description = document.createElement('p');
        description.textContent = project.description;

        const checkLink = document.createElement('a');
        checkLink.className = 'btn';
        checkLink.href = project.path;
        checkLink.textContent = 'Check';

        card.append(previewLink, title, description, checkLink);
        activityCards.appendChild(card);
    });

    scalePreviews();
}
 
