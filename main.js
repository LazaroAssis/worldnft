// DOM Document Object Model

/* MENU */

/* quando clicar no icone de menu abre e no x fecha*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}
/*************************************************** */

/* quando clicar em um item do menu fechar o menu */
const Links = document.querySelectorAll('nav ul li a')

for(const link of Links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}
/*************************************************** */

/*   scroll */
function Scroll(){
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

/*************************************************** */

/*  Dark Mode */

/* quando clicar em dark */
const buttonDark = document.getElementsByClassName('dimg')
const darks = document.querySelector('html')

for(const element of buttonDark) {
        element.addEventListener('click', function() {
            darks.classList.add('dark')
        })
}


/*************************************************** */

/*  slider  */
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true
})

/* Scrollreveal */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 800,
    reset: true
})

scrollReveal.reveal(
    `#home .text,
    #home .image,
    #about .image,
    #about .text,
    #services header,
    #services .card,
    #projects .box,
    #contact .text,
    #contact .container,
    #contact .links,
    footer .brand,
    footer .social`, {interval: 100})



/* back to home arrow up */
function arrow(){
    const backTopButton = document.querySelector('.arrow-up')
    if(window.scrollY >= 560){
        backTopButton.classList.add('show')
    }else{
        backTopButton.classList.remove('show')
    }
}

/* Menu ativo conforme seção na pagina */
/* pega todas as seções que contem um id */
const sections = document.querySelectorAll('main section[id]')

function activateMenuCurrentSection() {
    const checkPoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for( const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkPoint >= sectionTop
        const checkpointEnd = checkPoint <= sectionTop + sectionHight
        
        if(checkpointStart && checkpointEnd) {
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')
        }else{
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}




/*  When Scroll  */
window.addEventListener('scroll', function(){
    arrow()
    Scroll()
    activateMenuCurrentSection()
})




