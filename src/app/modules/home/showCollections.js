import getData from "../../helpers/getData.js"
import { ROPA } from "../../helpers/urls.js"
import showData from "../show.js";
import { getCollections } from "./util/getCollections.js";

export const showCollection = async()=>{    
    const main = document.getElementById("main")    
    const collectionsBtnElement = document.querySelector('#collections');
    const ropa= await getData(ROPA)
    

    collectionsBtnElement.addEventListener('click',()=>{
        main.innerHTML = getCollections(ropa); 
    })
    main.addEventListener('click',async e=>{
        const dataset = e?.target?.dataset;
        if(dataset.showmore)
        {
            localStorage.setItem('current-product-id',dataset.showmore)
            window.location.reload();            
        }else if(dataset.cartid)
        {            
            const form = document.querySelector('.form');
            const {id,name,price,image} = await getData(ROPA + '/' + dataset.cartid);
            const currentCart = JSON.parse(localStorage.getItem('cart'))??[];
            const map = new Map(currentCart);
            map.set(id,{
                name,
                price,
                image,
                amount:1,
                size:form.size.value
            });            
            const json = JSON.stringify(Array.from(map));
            localStorage.setItem('cart',json);
            window.location.reload();
        }

    })
}