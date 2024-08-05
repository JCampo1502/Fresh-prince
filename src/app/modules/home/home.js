import getData from "../../helpers/getData.js";
import { ROPA } from "../../helpers/urls.js";
import { getCardInfo } from "./util/getCardInfo.js";
import { getCartCollection } from "./util/getCartCollection.js";

export const home = async()=>{
    const main = document.querySelector('#main');
    const cart = document.querySelector('.cart');
    const logOutBtn = document.querySelector('.logout');
    const localId = localStorage.getItem('current-product-id')??'uno';
    const { id, name, image,image2,image3, price, description } = await getData(ROPA+'/'+localId);
    const infoTemplate = getCardInfo({
        id,
        name,
        description,
        price,
        images:[image,image2,image3]
    });

    cart.innerHTML = getCartCollection();
    main.innerHTML = infoTemplate;

    cart.addEventListener('click', e=>{
        const id = e?.target?.dataset?.remove;
        if(!id)return;
        const currentCart = JSON.parse(localStorage.getItem('cart'))??[];
        const map = new Map(currentCart);
        map.delete(id);

        const json = JSON.stringify(Array.from(map));

        localStorage.setItem('cart',json);
        window.location.reload();
    });

    logOutBtn.addEventListener('click',()=>{
        sessionStorage.removeItem("usuarioActual");
        window.location.href = "/src/index.html";
    })
}