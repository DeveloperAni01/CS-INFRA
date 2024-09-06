const hamburger = document.getElementById("hamburger");
const cross = document.getElementById("cross")
const sideBar = document.querySelector(".sidebar");


function showSidebar() {
    sideBar.style.display = "block"; 
}

function hideSidebar(){
    sideBar.style.display = "none"; 
}

hamburger.onclick = () => {  
    showSidebar();
};

cross.onclick = () => {
    hideSidebar()
}
    
