let yourname = document.querySelector("#yourname");
let output = document.querySelector("#output");
 
function displayName() {
    output.innerHTML = "Hello " + yourname.value + ", welcome to the bootcamp";
}


