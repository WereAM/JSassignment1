const yourname = document.querySelector(".yourname")

document.getElementById("yourname").addEventListener("click", displayName);
 
function displayName() {
    if (yourname!=null){
    document.getElementById("output") = "Hello" + yourname+ ", welcome to the bootcamp"
    return output
    }
}

