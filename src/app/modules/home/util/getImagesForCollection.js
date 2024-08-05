export const getImagesForCollection = (id, images = [])=>{
    const carouselId = `carouselClothes-${id}`;
    let template = '';
    images.forEach((img,i) => {
        template+= /* html */`
            <div class="carousel-item ${i == 0?'active':''}">
                <img src="${img}" class="d-block w-100" alt="preview img">
            </div>
        `;
    })
    return /* html */`
        <div id="${id}" class="card__img carousel slide col-8">
                    <div class="carousel-inner">
                      ${template}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                </div>
    `;
  }