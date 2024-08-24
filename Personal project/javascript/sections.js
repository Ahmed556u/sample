/** Adding dark and light mode **/
const theme = document.getElementById('theme');
const themeButton = document.getElementById('themeButton');
const body = document.getElementById('body');

/* change theme function */
function changeTheme() {

   /* Checks current theme */
   if (themeButton.getAttribute('data-theme') === 'light') {

   /* Switches to dark theme and changes icon */
   themeButton.setAttribute('data-theme', 'dark');
   themeButton.innerHTML = `<i class="fa-solid fa-moon" id="themeIcon"></i>`;
   body.classList.add('dark');

   } 
   else {

   /* Switches to light theme and changes icon */
   themeButton.setAttribute('data-theme', 'light');
   themeButton.innerHTML = `<i class="fa-solid fa-sun" id="themeIcon"></i>`;
   body.classList.remove('dark');

   };
};

/** Adss blur & shadow on scrolling **/

const header = document.getElementById('header')

/* Listens to scroll */
document.addEventListener('scroll', function(){

   /* Checks user scroll position on Y axis */
   if(window.scrollY > 0){

      /* Adds shadow */
      header.classList.add('shadow');

   }
   else{

      /* Removes shadow */
      header.classList.remove('shadow');

   };
});

const sections = document.querySelectorAll('section');

/* Listening for scroll */
document.addEventListener('scroll',()=>

   /* Apllying for each section */
   sections.forEach(section => {
      
      /* Getting the section pos */
      const sectionPos = section.getBoundingClientRect();

      /* Checks if its within view */
      if (sectionPos.top < 500 && sectionPos.bottom > 500 ) {

         /* Adds active class */
         section.classList.add('active')
         
      }else{

         /* Removes active class */
         section.classList.remove('active')

      };    
   })
);