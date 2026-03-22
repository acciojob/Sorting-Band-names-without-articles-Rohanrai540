//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function stripArticles(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

touristSpots.sort((a, b) => {
  return stripArticles(a).localeCompare(stripArticles(b));
});

const ul = document.getElementById("band");

touristSpots.forEach(spot => {
  const li = document.createElement("li");
  li.textContent = spot;
  ul.appendChild(li);
});
