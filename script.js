const activeLink = document.querySelectorAll('.link')
activeLink.forEach((link) => {
    link.addEventListener('click', () => {
        activeLink.forEach((l) => {
            l.classList.remove('active-link');
        });
        link.classList.add('active-link');
    });
});
const activeLinkMenubar = document.querySelectorAll('.link-sidebar')
activeLinkMenubar.forEach((link) => {
    link.addEventListener('click', () => {
        activeLinkMenubar.forEach((l) => {
            l.classList.remove('active-link');
        });
        link.classList.add('active-link');
    });
});
function submit(){
    event.preventDefault();
    const user = document.querySelector('.name-input');
    const email = document.querySelector('.email-input');
    const emailVlaue = '@' + email.value.split('@')[1];
    if (user.value === '' || emailVlaue != '@gmail.com') {
        return 0;
    }
    const popup = document.querySelector('.popup');
    const overlay = document.querySelector('.overlay-body');
    overlay.style.display = 'block';
    popup.style.display='flex';
    document.querySelector('.close-popup-img').addEventListener('click', () => {
        popup.style.display='none';
        overlay.style.display = 'none';
    });
    user.value = '';
    email.value = '';
}
document.querySelector('form').addEventListener('submit', (event) => {  
    submit();
});
document.querySelectorAll('form').forEach((info) => {
    info.addEventListener('keydown', (event) => {
        if (event === 'Enter') {
            submit();
        }
    });
});
const menu=document.querySelector('.menu-bar');
menu.addEventListener('click',()=>{
    menu.style.display='none';
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display='flex';
    document.querySelector('.close-menu').addEventListener('click',()=>{
        sidebar.style.display='none';
        menu.style.display='block';
    })
});
