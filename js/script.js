// OPEN MENU MOBILE

function initMenuMobile(){
    const icon = document.querySelector('.icon');
    const menu = document.querySelector('.menu');

    function openMenu(){
        icon.classList.toggle('icon-x');
        menu.classList.toggle('ativo');
    }

    icon.addEventListener('click', openMenu);
}

initMenuMobile();

// SLIDE BG

function initSlide(){
    const img = document.querySelectorAll('.slide img');
    const max = img.length;
    let numeroImg = 0;
    const time = 7000;

    function trocarImg(){
        img[numeroImg].classList.remove('selected');
        img[numeroImg++];

        if(numeroImg >= max){
            numeroImg = 0;
        }

        img[numeroImg].classList.add('selected');
    }


    function efeitoImg(){
        setInterval(() => {

            trocarImg();

        }, time);
    }
    
    window.addEventListener('load', efeitoImg);
}

initSlide();

// MODAL VIDEO

function initModalVideo(){
    const video = document.querySelector('.galeria-flex img');
    const modal = document.querySelector('.galeria-flex');
    const fecharModal = document.querySelector('.fechar i');
    const iframe = document.querySelector('.video iframe');


    function openVideo(){
        let transicao = document.querySelector('#overlay-0');
       

        setTimeout(() => { 
            transicao.classList.add('transicao');
            transicao.style.transition="0.9s";
        }, 50); 

         setTimeout(() => {           
            transicao.classList.remove('transicao');
            modal.classList.add('modal');
         }, 2000);            
    }

    video.addEventListener('click', openVideo);


    fecharModal.addEventListener('click', function(){
        modal.classList.remove('modal');  
        iframe.setAttribute('src', 'https://www.youtube.com/embed/-EXfgdC2pRg?autoplay=0;mute=0;?controls=1&amp;;stop');  
    })

}

initModalVideo();

// SCROLL TO SECTION

function initScrollToSection(){
    const linksInternos = document.querySelectorAll('.menu a[href^="#"');
    const goForm = document.querySelectorAll('.icon-next a[href^="#"');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: "smooth",
        });
    }


    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });

    goForm.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

initScrollToSection();




