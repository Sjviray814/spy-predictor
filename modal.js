const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");


openButton.addEventListener("click", () => {
    modal.showModal();
    
});

closeButton.addEventListener("click", () => {
    modal.close();
});



const openButton2 = document.querySelector("[data-open-modal2]");
const closeButton2 = document.querySelector("[data-close-modal2]");
const modal2 = document.querySelector("[data-modal2]");


openButton2.addEventListener("click", () => {
    modal2.showModal();
    
});

closeButton2.addEventListener("click", () => {
    modal2.close();
});