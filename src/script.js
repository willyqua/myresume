/*
// NAVBAR
let lastScrollTop = 0;
const navbar = document.querySelector('#navbar');
console.log(navbar);

window.addEventListener('scroll', function () {
    const scrollTop = window.pageTOffset ||
        this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-50px";
    } else {
        navbar.style.top = scrollTop + "px";
    }
    lastScrollTop = scrollTop;
})*/

// TYPED

var typed = new Typed('.typed', {
    strings: ["Actuellement titulaire d'un BTS en développement WEB obtenu en Octobre 2020, je suis à la recherche de ma prochaine aventure professionnelle, dans le domaine des applications Web.Je suis à l’écoute de toute opportunité dans la métropole lilloise tout en restant ouvert de nouvelle proposition géographique.Si vous êtes intéressé(e)s, n’hésitez pas à me contacter en message privé sur LinkedIn ou par mail."],
    typeSpeed: 10
});