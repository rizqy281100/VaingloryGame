const heroData = [
    {
        name: "Laner",
        photo: "img/Laner.jpeg"
  },
    {
        name: "Captain",
        photo: "img/Captain.jpeg"
  },
    {
        name: "Jungler",
        photo: "img/Jungler.jpeg"
  }
];


function heroTemplate(hero) {
    return `
      <div class="col-lg-4 col-md-12 mb-4">
        <div class="view overlay rounded z-depth-1">
          <img src="${hero.photo}">
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>

        <div class="px-3 pt-3 mx-1 mt-1 pb-0">
          <h2 class="font-weight-bold mt-1 mb-3">${hero.name}</h2>
          <p class="text-muted white-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
        </div>
      </div>     
  `;
}

document.getElementById("json").innerHTML = `
  <h2 class="title">Select Your Role</h2>
  <div class="container my-5">
  <section class="dark-grey-text text-center">    
    <div class="row">
      ${heroData.map(heroTemplate).join("")}
    </div>
  </section>
  </div>
`;
