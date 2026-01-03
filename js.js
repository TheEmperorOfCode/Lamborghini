const myButton = document.querySelector('#floatingBtn');

window.addEventListener('scroll', () => {
    const isScrolled = document.documentElement.scrollTop > 300;
    if(isScrolled){
    myButton.style.display = "flex" 
    }
    else{
    myButton.style.display = "none" 
    }
});

myButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});