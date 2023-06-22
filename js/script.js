
///////////////////////////////////////////////////////////
// Smooth scrolling animation
document.addEventListener('DOMContentLoaded', function() {
   // Smooth scroll to section
   let toggleNavItems = document.querySelectorAll('.toggle-nav');
 
   toggleNavItems.forEach(function(item) {
     item.addEventListener('click', function(event) {
       event.preventDefault();
 
       let targetSection = item.firstElementChild.getAttribute('href');
       let navToggleCheckbox = document.getElementById('navi-toggle');
       
       window.scrollTo({
         top: document.querySelector(targetSection).offsetTop,
         behavior: 'smooth'
       });
 
       // Close navigation bar
       navToggleCheckbox.checked = false;
     });
   });
 });
 