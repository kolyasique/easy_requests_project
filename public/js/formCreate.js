const btns = document.querySelectorAll("*[data-modal-btn]")

for(let i = 0; i < btns.length; i++){
btns[i].addEventListener('click', () =>{

    let name = btns[i].getAttribute('data-modal-btn');
    let modal = document.querySelector("[data-modal-window = '"+name+"']")
    console.log(modal)
    modal.style.display ="block"
    let close = modal.querySelector(".close_modal_window")
    close.addEventListener('click', ()=>{
        modal.style.display ="none" 
    })
})
}

window.onclick = function(e){
    if(e.target.hasAttribute('data-modal-window')){
        let modals = document.querySelectorAll("*[data-modal-window]")
        for(let i = 0; i < modals.length; i++){
            modals[i].style.display = "none"
        }
    }
}