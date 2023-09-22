const openmodal = document.querySelector(".ventana");
const modal = document.querySelector (".modal");
const closemodal = document.querySelector (".modal_close");

openmodal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add("modal--show");
});
closemodal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove("modal--show");
});