const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const modal = document.querySelector('.modal');
const closebutton = document.querySelector('.close-button');



function btnSuper (tipoBtn){
    tipoBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.classList.add('visible');
    });
}

closebutton.addEventListener('click', () => {
    console.log("db")
    modal.classList.remove('visible');    
    modal.classList.add('hidden');
});

btnSuper(button1);
btnSuper(button2);
btnSuper(button3);