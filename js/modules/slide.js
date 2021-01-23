export default function initSlide(){
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