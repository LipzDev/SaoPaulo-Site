export default function initModalVideo(){
    let img = document.querySelector('.galeria-flex img');
    let modal = document.querySelector('.video');
    let fechar = document.querySelector('[data-closeModal]');
    let video = document.querySelector('.video iframe');

    function openModal(){
        modal.classList.toggle('modal');
    }

    img.addEventListener('click', openModal);

    // CLOSE MODAL

    function closeModal(){
        modal.classList.remove('modal');

        // STOP VIDEO
        let videoUrl = video.getAttribute('src');
        let videoStop = videoUrl + '?autoplay=0;mute=0;?controls=1&amp;;stop';
        video.setAttribute('src', videoStop);
    }

    fechar.addEventListener('click', closeModal);
}