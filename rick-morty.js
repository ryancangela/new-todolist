const characterUrl = ["https://rickandmortyapi.com/api/character/"];
const episodeUrl = ["https://rickandmortyapi.com/api/episode/"];

axios
  .get(characterUrl)
  .then(({ data: { results } }) => {
    const html = results.map(
      (character) =>
        `<div class="character ${character.status}" alt="${character.name} Information">
            <div class="character-flex">
            <div class="card-img">
                <img src="${character.image}" alt="${character.name} Profile Photo" />
            </div>
            <div class="card-profile">
                <p class="character-name" alt="Full Name">${character.name}</p>
                <p class="character-gender" alt="Character's Gender"><span class="titles">Gender:</span> ${character.gender}</p>
                <p class="status"><span class="titles">Status:</span> ${character.status}</p>
                <p class="species"><span class="titles">Status:</span> ${character.species}</p>
                <p class="origin"><span class="titles">Origin:</span> ${character.origin.name}</p>

                <p id="timeCreated"><span class="titles">BOD:</span> ${character.created}</p>

        </div>

<div id="${character.id}"></div>

        </div>
      </div>`
    );

    $(".character-list")[0].innerHTML = html.join("");
  })
  .catch((err) => console.log(err));

//   document.getElementsByClassName("")

// axios
//   .get(episodeUrl)
//   .then(({ data: { results } }) => {
//     const html = results.map(
//       (episode) =>
//         `<div class="${episode.id}" alt="${episode.name} Information">
// <p>${episode.name}</p>
//       </div>`
//     );

//     $(".episodes-list")[0].innerHTML = html.join("");
//   })
//   .catch((err) => console.log(err));
