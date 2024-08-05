import { home } from "./modules/home/home.js";
import { showCollection } from "./modules/home/showCollections.js";

const user = sessionStorage.getItem("usuarioActual");

if(user)
{
    showCollection();
    home();
}
else
{        
    window.location.href = "/src/index.html";
}