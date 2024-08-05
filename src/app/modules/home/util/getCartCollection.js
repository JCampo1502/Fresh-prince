import { getCartCard } from "./getCartCard.js";

export const getCartCollection = ()=>{
    const localItems = JSON.parse(localStorage.getItem('cart'))??[];
    let template = '';
    let subtotal = 0;
    localItems.forEach(product => {
        const [id, item] = product;
        item.id = id;
        subtotal += item.price * item.amount;
        console.log(item);
        template+=getCartCard(item);
    });
    return /* html */`
        <ul class="cards">
            ${template}
        </ul>
        <p class="subtotal">
            Subtotal <em class="subtotal__value">$${subtotal}</em>
        </p>
    `;
}