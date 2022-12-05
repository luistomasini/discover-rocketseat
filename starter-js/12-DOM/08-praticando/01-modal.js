const modalWrapper = document.querySelector('.modal-wrapper')
const openModalbutton = document.querySelector('button')

openModalbutton.addEventListener('click', function(){
    modalWrapper.classList.remove('invisible')
})

document.addEventListener('keydown', function(event){
    let isEscKey = event.key === 'Escape'
    
    if (isEscKey) {
        modalWrapper.classList.add('invisible')
    }
})