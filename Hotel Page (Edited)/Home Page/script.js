

const navBtn = document.getElementById('nav-btn'); // select the navigation button by its ID
const cancelBtn = document.getElementById('cancel-btn');  // select the cancel button by its ID
const sideNav = document.getElementById('sidenav'); // select the side navigation element by its ID
const modal = document.getElementById('modal'); // select the modal element by its ID

navBtn.addEventListener("click", function(){ // when the navigation button is clicked
    sideNav.classList.add('show');  // add the class 'show' to the side navigation element
    modal.classList.add('showModal'); // add the class 'showModal' to the modal element
});

cancelBtn.addEventListener('click', function(){ // when the cancel button is clicked
    sideNav.classList.remove('show'); // remove the class 'show' from the side navigation 
    modal.classList.remove('showModal'); // remove the class 'showModal' from the modal 
});

window.addEventListener('click', function(event){ // when the window is clicked
    if(event.target === modal){ // check if the target of the click event is the modal element
        sideNav.classList.remove('show'); // if so, remove the class 'show' from the side navigation 
        modal.classList.remove('showModal'); // and remove the class 'showModal' from the modal 
    }
});