
// const searchBox = document.querySelector("#hero-name-search");
// function displayHero(){
//     var heroName = document.getElementById("hero-name-search").value;
// }

// const inputValue = document.querySelector("#textbox").value;

let inputValue = "";

function displayImage() {
    
    // Get the textbox input value
    inputValue = document.getElementById('textbox').value; // example "Luna"
    var hero = `/images/dota2/agility/${inputValue}.png`;
    console.log(hero);

    //var hero = "/images/dota2/agility/${inputValue}.png";

    // Get the image element
    var imageElement = document.getElementById('image');
    var imageElement2 = document.getElementById('image2');
    var imageElement3 = document.getElementById('image3');

    // Set the image source based on the textbox input value
    imageElement.src = hero;
    imageElement2.src = hero;
    imageElement3.src = hero;

}


// search function
function myFunction() {
    var input, filter, ul, li, a, i, txtValue, her;
    her = document.querySelector(".anim");
    input = document.getElementById("hero-name-search"); //text input
    filter = input.value.toUpperCase(); //filter
    ul = document.getElementById("category"); //the items located
    li = ul.getElementsByTagName("a"); //index
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0]; //the tag where the name is placed
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            
        } else {
            li[i].style.display = "none";
            
        }
    }
}
