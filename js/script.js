$("#darkMode").click(function(){
    if ($("body").hasClass("dark")){
        $("body").removeClass("dark");
    }
    else{
        $("body").addClass("dark");
    }
});

// TYPED.JS

// var typed2 = new Typed('#typed2', {
//     strings: ['Some <i>strings</i> with', 'Some <strong>HTML</strong>', 'Chars &times; &copy;'],
//     typeSpeed: 0,
//     backSpeed: 0,
//     fadeOut: true,
//     loop: true
//   });

var typed = new Typed('#typed', {
    strings: ["Développeur", "Web", "Junior"],
    typeSpeed : 100,
    backSpeed : 50,
    loop: true
})

// Barre de progresion

const body = document.querySelector('body');

const scrollBar = document.querySelector('div.scroll');

window.addEventListener('scroll', () => {
    // On récupere la valeur du Scroll divisé par la hauteur du body - la hauteur en pixel de la fenetre
    let scroll = window.scrollY / (body.clientHeight - window.innerHeight);
    let scrollPourcent = Math.round(scroll * 100);
    scrollBar.style.width = scrollPourcent + '%';
})