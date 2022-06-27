'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

let buttons = '<button class="show-modal">1</button><button class="show-modal">2</button><button class="show-modal">3</button>';


console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', function() {
        console.log(`button clicked ${i}`);
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


document.addEventListener('keyup', function(e){
    // console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        
            closeModal();
    }
});