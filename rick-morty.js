const resourceUrl = ["https://rickandmortyapi.com/api/character/"];

axios
  .get(resourceUrl)
  .then(({ data: { results } }) => {
    const html = results.map(
      (item) =>
        `<div class="character ${item.status}" alt="${item.name} Information">
            <div class="character-flex">
            <div class="card-img">
                <img src="${item.image}" alt="${item.name} Profile Photo" />
            </div>
            <div class="card-profile">
                <a href="${item.url} alt="${item.name} end point">
                    <p class="characer-name" alt="Full Name">${item.name}</p>
                </a>
                <p class="status"> ${item.status}</p>
                <p class="species">${item.species}</p>
                <p class="subspecies">${item.type}</p>
                <p class="origin">${item.origin.name}</p>
                <p id="timeCreated">${item.created}</p>

        </div>

<div class="episodes-list"></div>

        </div>
      </div>`
    );

    $(".character-list")[0].innerHTML = html.join("");
  })
  .catch((err) => console.log(err));

// const epsUrl = "https://rickandmortyapi.com/api/episode/";
// axios
//   .get(epsUrl)
//   .then(({ data: { results } }) => {
//     const html = results.map(
//       (item) =>
//         `<div class="episode-wrapper" alt="${item.name}">
// ${item.name}
//       </div>`
//     );

//     $(".episodes-list")[0].innerHTML = html.join("");
//   })
//   .catch((err) => console.log(err));
