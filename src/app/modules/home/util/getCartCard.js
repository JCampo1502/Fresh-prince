export const getCartCard = ({
    price,
    image,
    amount,
    name,
    id
})=>{
    return /* html */`
    <li class="card mb-3">
        <img class="card__img" src="${image}" alt="image">
        <p class="card__description">
            <strong class="card__name">${name}</strong>
            <em class="card__price">$${price * amount}</em>
        </p>
        <div class="card__actions">
            <span class="amount">${amount}</span>
            <button class="btn" data-remove="${id}" >Remove</button>
        </div>
    </li>
    `;
}