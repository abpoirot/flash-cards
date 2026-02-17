const words = [
  { english: "apple", korean: "사과" },
  { english: "book", korean: "책" },
  { english: "water", korean: "물" },
  { english: "friend", korean: "친구" }
];

let currentIndex = 0;
let showingEnglish = true;

const card = document.getElementById("card");
const cardText = document.getElementById("card-text");
const nextBtn = document.getElementById("next-btn");

card.addEventListener("click", () => {
  if (showingEnglish) {
    cardText.textContent = words[currentIndex].korean;
  } else {
    cardText.textContent = words[currentIndex].english;
  }

  showingEnglish = !showingEnglish;
});

nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= words.length) {
    currentIndex = 0;
  }

  showingEnglish = true;
  cardText.textContent = words[currentIndex].english;
});
