// Auto text sequential display
var typed = new Typed('.typed', {
    strings: ["Actuellement titulaire d'un BTS en développement WEB obtenu en Octobre 2020, je suis à la recherche de ma prochaine aventure professionnelle, dans le domaine des applications Web.Je suis à l’écoute de toute opportunité dans la métropole lilloise tout en restant ouvert de nouvelle proposition géographique.Si vous êtes intéressé(e)s, n’hésitez pas à me contacter en message privé sur LinkedIn ou par mail."],
    typeSpeed: 10
});

//Skill computation / animation
const skills = {
    'autodidact-coding-challenge': {
        "target": 50,
        "value": 0
    },
    'autodidact-projects': {
        "target": 60,
        "value": 0
    },
    'codecamp-coding-challenge': {
        "target": 30,
        "value": 0
    },
    'codecamp-projects': {
        "target": 25,
        "value": 0
    },
    'occ-courses': {
        "target": 7,
        "value": 0
    },
    'occ-certificates': {
        "target": 250,
        "value": 0
    },
}

let timeSkill = 0;
const duration = 3;
let runOnce = false;
const skillUpdate = () => {
    for (const skill in skills) {
        skills[skill].value += skills[skill].target / (duration * 50)
        document.querySelector('.' + skill).innerHTML = parseInt(skills[skill].value)
    }
    timeSkill++;
    if (timeSkill < duration * 50) {
        setTimeout(skillUpdate, 20)
    }
}
// Trigger skill computation once on page scroll
window.addEventListener('scroll', () => {
    if (!runOnce && window.scrollY > 1200) {
        runOnce = true
        skillUpdate()
    }
})

// AOS
AOS.init();
