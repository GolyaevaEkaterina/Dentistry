let isOpen = false

function openMenu(){
    const menu = document.getElementById("Menu")
    const open = document.getElementById("iconNav-open")
    const close = document.getElementById("iconNav-close")
    
    if (isOpen){
       menu.style.display = "none"
       open.style.display = "flex"
       close.style.display = "none"
       isOpen = false
    }else{
        menu.style.display = "flex"
        open.style.display = "none"
        close.style.display = "flex"
        isOpen = true
    }
}