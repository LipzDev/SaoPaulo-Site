export default function initScrollToSection(){
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