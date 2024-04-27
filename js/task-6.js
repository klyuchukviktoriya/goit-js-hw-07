function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const boxes = document.getElementById("boxes");
const input = controls.children[0];
const createButton = controls.children[1];
const destroyButton = controls.children[2];

createButton.addEventListener("click", () => {
  const amount = input.value;
  boxes.innerHTML = "";
  input.value = "";
  if (amount >= 1 && amount <= 100) {
    const boxesArray = [];

    for (let i = 0; i < amount; i += 1) {
      const box = document.createElement("div");
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();

      boxesArray.push(box);
    }
    boxes.append(...boxesArray);
  }
});

destroyButton.addEventListener("click", () => {
  boxes.innerHTML = "";
  input.value = "";
});