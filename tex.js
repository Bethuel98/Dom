let faBars = document.querySelector('.faBars');
let navBar = document.querySelector('.navBars');

faBars.addEventListener('click',()=>{
   navBar.classList.toggle('menu-bars')
})


let sectionTop1 = document.getElementById('section1').offsetTop -200;
let sectionTop2 = document.getElementById('section2').offsetTop -200;
let sectionTop3 = document.getElementById('section3').offsetTop -200;

let Menu = document.getElementById('Menu')
let contact = document.getElementById('contact')
let localisation = document.getElementById('localisation')

let sectionHeight1 = document.getElementById('section1').offsetHeight;
let sectionHeight2 = document.getElementById('section2').offsetHeight;
let sectionHeight3 = document.getElementById('section2').offsetHeight;


function listener (sectionTop, sectionHeight, links){
   if(window.scrollY > sectionTop && 
      window.scrollY <= sectionTop + sectionHeight){
         links.classList.add('active');
         console.log('active');
      }
      else{
         links.classList.remove('active');
      }
   }
document.addEventListener('scroll',()=> listener(sectionTop1 , sectionHeight1 , Menu ))
document.addEventListener('scroll',()=> listener(sectionTop2 , sectionHeight2 , contact ))
document.addEventListener('scroll',()=> listener(sectionTop3 , sectionHeight3 , localisation ))
