const boxes = document.querySelectorAll(".box");
const resetButton = document.querySelector("#reset");
const newGameButton = document.querySelector("#newBtn");
const messageContainer = document.querySelector(".msgcont");
const messageDisplay = document.querySelector("#msg");

let isPlayerOTurn = true;

const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  isPlayerOTurn = true;
  enableBoxes();
  messageContainer.classList.add("hide");
};

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const showWinner = (winner) => {
  messageDisplay.innerText = `Congratulations! The winner is ${winner}`;
  disableBoxes();
  messageContainer.classList.remove("hide");
};

const checkWinner = () => {
  for (const pattern of winningPatterns) {
    const [a, b, c] = pattern;
    const posVal1 = boxes[a].innerText;
    const posVal2 = boxes[b].innerText;
    const posVal3 = boxes[c].innerText;

    if (posVal1 && posVal1 === posVal2 && posVal1 === posVal3) {
      showWinner(posVal1);
      return;
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (!box.innerText) {
      box.innerText = isPlayerOTurn ? "O" : "X";
      box.disabled = true;
      isPlayerOTurn = !isPlayerOTurn;
      checkWinner();
    }
  });
});

newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);

resetGame();
