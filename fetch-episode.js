const response = await fetch(episodeUrl[, options]);

async function loadNames() {
  const response = await fetch("/api/episode");
  const names = await response.json();
  console.log(names);
  // logs [{ name: 'Joker'}, { name: 'Batman' }]
}
loadNames();