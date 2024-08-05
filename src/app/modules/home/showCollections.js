import getData from "../../helpers/getData.js"
import { ROPA } from "../../helpers/urls.js"
import showData from "../show.js";

export const showCollection = async()=>{    
    const main = document.getElementById("main")    
    const collectionsBtnElement = document.querySelector('#collections');
    const ropa=await getData(ROPA)
    
    
    collectionsBtnElement.addEventListener('click',()=>{
        showData(ropa,main);
        console.log(ropa)
    })
}