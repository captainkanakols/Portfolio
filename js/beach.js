
let photo, wedTitle, birTitle, wedDesc, birDesc = "";

photo = document.querySelector("#eventPhoto");
wedTitle = document.querySelector("#wedTitle");
birTitle = document.querySelector("#birTitle");
wedDesc = document.querySelector("#wedDesc");
birDesc = document.querySelector("#birDesc");
wedQuot = document.querySelector("#wedQuot");
birQuot = document.querySelector("#birQuot");


function changeToWed(){
    photo.src = '../images/beach/events/wed2.jpg';
    wedTitle.style.display = "block";
    birTitle.style.display = "none";
    wedDesc.style.display = "block";
    birDesc.style.display = "none";
    wedQuot.style.display = "block";
    birQuot.style.display = "none";
}

function changeToBir(){
    photo.src = '../images/beach/events/bir2.jpg';
    wedTitle.style.display = "none";
    birTitle.style.display = "block";
    wedDesc.style.display = "none";
    birDesc.style.display = "block";
    wedQuot.style.display = "none";
    birQuot.style.display = "block";
}

const btnWed = document.querySelector("#btnWed");
const btnBir = document.querySelector("#btnBir");

btnWed.addEventListener("click", (e) =>{
    e.preventDefault();
    wedTitle.classList.add("title-animate");
    wedDesc.classList.add("desc-animate");
    wedQuot.classList.add("quot-animate");
});

btnBir.addEventListener("click", (e) =>{
    e.preventDefault();
    birTitle.classList.add("title-animate");
    birDesc.classList.add("desc-animate");
    birQuot.classList.add("quot-animate");
});