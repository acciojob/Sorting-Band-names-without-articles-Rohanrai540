let touristSpots = [
  'The Virupaksha Temple',
  'Victoria Memorial',
  'Tajmahal'
];

// remove articles
function stripArticles(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// sort
touristSpots.sort((a, b) =>
  stripArticles(a).localeCompare(stripArticles(b))
);

// select ul
const ul = document.getElementById("band");

// append list items
touristSpots.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});
