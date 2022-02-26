import { ItemListContainer } from "../itemListContainer/ItemListContainer"

export const Home=()=>{
return(
<div className="App">
<div class="seccion-banner" data-aos="fade-right">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
       
      </div>
      <div class="carousel-inner ">
        <div class="carousel-item active">
          <img src="https://i.postimg.cc/J0j7sjtm/banner2.jpg" class="d-block w-100" alt="Foto de Banner"/>
        </div>
        <div class="carousel-item">
          <img src="https://i.postimg.cc/852PkZpt/banner3.jpg
" class="d-block w-100" alt="Foto de banner"/>
        </div>
      </div>
    </div>

  </div>
     <ItemListContainer greeting="Computadoras armadas:" />
     
    </div>
    )
}
