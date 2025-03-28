const menuIcon = document.querySelector("#menuIcon")
const closeIcon = document.querySelector("#closeIcon")
const sidebar = document.querySelector("#sidebar")

// Definir qual interação (evento) o elemento terá
menuIcon.addEventListener("click", showSidebar)
closeIcon.addEventListener("click", hideSidebar)

closeIcon.style.display = "none"
// Definir o que será feito quando a interação (evento) ocorrer

function showSidebar(){
    // sidebar.style.display = "flex"    
    sidebar.style.right = "0"
    closeIcon.style.display = "flex"
    menuIcon.style.display = "none"
}

function hideSidebar(){
    
    sidebar.style.right = "-100%"
    closeIcon.style.display = "none"
    menuIcon.style.display = "flex"
}