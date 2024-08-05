const getPreviewCard = (i,id,img)=>{
    return /* html */`
        <li class="preview__item p-0">
            <button data-bs-target="#${id}" data-bs-slide-to="${i}" ${i==0?'aria-current="true"':''} aria-label="Slide ${i}" class="preview__link p-0 ${i==0?'active':''}">
                <img class="preview__icon" src="${img}" alt="preview image">
            </button>
        </li>
    `;
}

const getCarouselCard = (i,img)=>{
    return /* html */`
        <div class="carousel-item ${i==0?'active':''}">
            <img src="${img}" class="d-block w-100" alt="preview img">            
        </div>
    `;
}

export const getCardInfo = ({
    id,
    name,
    description,
    images = [],    
    price
})=>{
    let btn = '';
    let items = '';
    const carouselId = `current-carouselClothes-${id}`
    images.forEach((img, i)=>{
        btn+=getPreviewCard(i,carouselId,img);
        items+=getCarouselCard(i,img);
    })

    return /* html */`
        <section class="main__section row">            
            <article class="main__article col-12 col-lg-8 d-flex  justify-content-around align-items-start pt-3">
                <ul class="preview row p-0 row-gap-4">
                    ${btn}
                </ul>
                <div id="${carouselId}" class="carousel slide col-8">
                    <div class="carousel-inner">
                        ${items}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </article>
            <article class="main__article col-12 col-lg-4 p-5 p-lg-0">
                <h1 class="main__title fw-bold fs-1">${name}</h1>
                <em class="price fs-3 fst-normal mt-2">$ ${price}</em>

                <form class="form mt-3">
                    <fieldset class="form__section">
                        <legend class="form__title fs-5 mt-3">Size</legend>
                        <div class="form__size d-flex justify-content-start align-items-center">
                            <div class="form__group">
                                <input type="radio" name="size" class="form__input form__input--radio" checked id="s" value="s">
                                <label for="s" class="form__label text-uppercase">S</label>
                            </div>
                            <div class="form__group">
                                <input type="radio" name="size" class="form__input form__input--radio" id="m" value="m">
                                <label for="m" class="form__label text-uppercase">m</label>
                            </div>
                            <div class="form__group">
                                <input type="radio" name="size" class="form__input form__input--radio" id="l" value="l">
                                <label for="l" class="form__label text-uppercase">l</label>
                            </div>
                            <div class="form__group">
                                <input type="radio" name="size" class="form__input form__input--radio" id="xl" value="xl">
                                <label for="xl" class="form__label text-uppercase">xl</label>
                            </div>
                            <div class="form__group">
                                <input type="radio" name="size" class="form__input form__input--radio" id="xxl" value="xxl">
                                <label for="xxl" class="form__label text-uppercase">xxl</label>
                            </div>
                        </div>
                    </fieldset>
                    <div class="form__btns row row-gap-2 mt-4 mt-lg-5">
                        <button class="form__btn btn btn-dark rounded-0" data-cartid="${id}" type="button">ADD TO CART</button>
                        <button class="form__btn btn btn-primary rounded-0">BUY IT NOW</button>
                    </div>
                </form>
                <div class="description mt-4">
                    ${description}
                    <a href="#" class="description__link mt-5 d-block">Click for Sizing</a>
                </div>
            </article>
        </section>   
    
    `;
}