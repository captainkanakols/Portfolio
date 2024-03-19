
// To out put in logs
// document.addEventListener("click", function(e){
//     if(e.target.classList.contains("gallery-items")){
//         const src = e.target.getAttribute("src");
//         console.log(src);
//     }
// })

document.addEventListener("click", function(e){
    if(e.target.classList.contains("gallery-items")){
        const src = e.target.getAttribute("src");
        document.querySelector(".gallery-modal").src = src;
        const myModal = new bootstrap.Modal('#gallery-modal',);
        myModal.show();
    }
})


