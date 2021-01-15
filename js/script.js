const openMenu = document.querySelector('.header__navigation-toggle');
const show = document.querySelector('.aside');
const showContacts = document.querySelector('.aside__contacts');

if (show !== null ) {
    openMenu.addEventListener('click', function(e) {
        e.preventDefault();
        show.classList.toggle('aside--shadow');
        
    })
  
  }


  