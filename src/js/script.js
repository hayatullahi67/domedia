const menusm = document.querySelector('.menusm');
const headernav = document.querySelector('.headernav');
const navimg = document.querySelector('.navimg');

menusm.addEventListener('click',()=>{
    headernav.classList.add('open')
})
 
navimg.addEventListener('click',()=>{
    headernav.classList.remove('open')
})