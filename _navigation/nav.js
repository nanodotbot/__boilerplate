const nav = document.getElementById('nav-screen');
const menu = document.getElementById('menu');
const screenLinks = document.querySelectorAll('.screen-link');

menu.onclick = () => {
    nav.classList.toggle('active');
    menu.classList.toggle('active');
};

screenLinks.forEach(screenLink => {
    screenLink.onclick = () =>{
        console.log('here i am');
        nav.classList.toggle('active');
        menu.classList.toggle('active');
    }
})