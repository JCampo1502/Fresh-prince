import { getCardForCollection } from "./getCardForCollection.js";

export const getCollections = (collections = [])=>{
    let template = '';
    collections.forEach(collection =>{   
        const { id, name, image,image2,image3, price } = collection;
        const images = [image,image2,image3];
        template += getCardForCollection({
            id,
            name,
            price,
            images
        });
    });
        
    return  /* html */`
        <article class="main__article mt-5">    
            <h3 class="main__title text-center fw-bold">COLLECTIONS</h3>
            <ul class="cards__container cards__container--collections d-flex flex-wrap justify-content-evenly">
                ${template}
            </ul>
        </article>
    `;
}