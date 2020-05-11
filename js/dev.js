const devData = [
  {
    name: "Anna",
    photo: "img/Anna.jpg"
  },
  {
    name: "John",
    photo: "img/John.jpg"
  },
  {
    name: "Maria",
    photo: "img/Maria.jpg"
  },
  {
    name: "Tom",
    photo: "img/Tom.jpg"
  }
];

function Template(dev) {
  return `
      <div class="col-lg-3 col-md-6 mb-lg-0 mb-5">
          <div class="avatar mx-auto">
            <img src="${dev.photo}" class="rounded-circle z-depth-1" alt="Sample avatar">
          </div>
          <div class="px-3 pt-3 mx-1 mt-1 pb-0">
          <p class="text-muted white-text">"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae."</p>
          <h2 class="font-weight-bold mt-4 mb-3">${dev.name}</h2>
          <p class="text-uppercase white-text"><strong>Web developer</strong></p>
          </div>
        </div>    
  `;
}

document.getElementById("dev").innerHTML = `
<section class="team-section text-center">
  <h2 class="h1-responsive font-weight-bold mb-4 pb-2">The Halcyon Conqueror</h2>
      <div class="row">
      ${devData.map(Template).join("")}
    </div>
</section>
`;
