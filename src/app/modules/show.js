/* 
 <article class="main__article mt-5">
                <h3 class="main__title text-center fw-bold">YOU MAY ALSO LIKE</h3>
                <ul class="cards__container d-flex flex-wrap justify-content-evenly">
                    <li class="card border-0">
                        <img class="card__img" src="./assets/images/img-5.png" alt="img card">
                        <p class="card__descritpion fw-bold fs-5 text-center">
                            <strong class="card__title d-block mt-3">Fresh Stripe Sweater</strong>
                            <em class="card__price fst-normal">$85.00</em>
                        </p>
                    </li>
                    <li class="card border-0">
                        <img class="card__img" src="./assets/images/img-8.png" alt="img card">
                        <p class="card__descritpion fw-bold fs-5 text-center">
                            <strong class="card__title d-block mt-3">Fresh Black Tie-Dye Hoodie</strong>
                            <em class="card__price fst-normal">$75.00</em>
                        </p>
                    </li>
                    <li class="card border-0">
                        <img class="card__img" src="./assets/images/img-14.png" alt="img card">
                        <p class="card__descritpion fw-bold fs-5 text-center">
                            <strong class="card__title d-block mt-3">Pose For It Tee</strong>
                            <em class="card__price fst-normal">$45.00</em>
                        </p>
                    </li>
                </ul>
            </article>

            
*/




export const showData = (data, container) => {

    container.innerHTML = ""
    data.forEach((element) => {
        let { id, name, image,image2,image3, description, price } = element
        const div = document.createElement("div")
        div.classList.add("ropa")
        div.setAttribute("id", id)
        console.log(id)
        div.innerHTML = `
       
      <div class="card" id="${id}" style="width: 80%;">
      
        <img src="${image}" class="card-img-top">
        <img src="${image2}" class="card-img-top">
        <img src="${image3}" class="card-img-top">


        
        <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-title">$${price}</h6>


<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Mas informacion
</button>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">${name}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ${description}
      </div>
      <div class="modal-footer">

        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Agregar a carrito</button>
      </div>
    </div>
  </div>
</div>
         
        </div>
        
    </div>
    
    `

        container.appendChild(div)
    });
}
export default showData