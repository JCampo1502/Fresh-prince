import { getImagesForCollection } from "./getImagesForCollection.js";

export const getCardForCollection = ({
    id,
    name,    
    price,
    images
})=>{
    return /* html */`
        <li class="card border-0" >
            ${getImagesForCollection(id,images)}
            <div class="card__descritpion fw-bold fs-5 text-center">
                <strong class="card__title d-block mt-3">
                    ${name}
                </strong>
                <em class="card__price fst-normal">
                    $${price}
                </em>
                <button class="btn btn-primary btn-lg rounded-0 text-uppercase d-block mx-auto mb-4" data-showmore="${id}">See more</button>
            </div>
        </li>
    `;
}