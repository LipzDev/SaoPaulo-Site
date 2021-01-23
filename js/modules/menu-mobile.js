export default function initMenuMobile(){
   const icon = document.querySelector('.icon');
   const menu = document.querySelector('.menu');

   function openMenu(){
       icon.classList.toggle('icon-x');
       menu.classList.toggle('ativo');
   }

   icon.addEventListener('click', openMenu);
}