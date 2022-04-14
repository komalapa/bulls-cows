import genNumber from "./genNumber.js";
import turnResult from "./turnResult.js";
import validateInput from "./validateInput.js";
import { bull, cow } from "./bull_cow.js";

const userInputEl = document.querySelector("#bc-user-input");
const attemptsList = document.querySelector("#attempts");

userInputEl.addEventListener("input", () => {
  const validValue = validateInput(userInputEl.value);
  if (validValue !== userInputEl.value) {
    userInputEl.classList.add("invalid-input");
    setTimeout(() => userInputEl.classList.remove("invalid-input"), 100);
  }
  userInputEl.value = validValue;
});

const game = () => {
  const number = genNumber();
  // console.log(number)
  let isWin = false;
  let attempts = 0;
  userInputEl.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && userInputEl.value.length === 4 && !isWin) {
      const result = turnResult(userInputEl.value, number);

      const attemptItem = document.createElement("li");
      const attempt = document.createElement("span");
      attempt.innerText = userInputEl.value;
      for (let i = 0; i < result.bulls; i++)
        attempt.append(bull.cloneNode(true));
      for (let i = 0; i < result.cows; i++) attempt.append(cow.cloneNode(true));
      attempt.classList = "attempt";
      attemptItem.append(attempt);
      attemptsList.append(attemptItem);
      attempts += 1;
      userInputEl.value = '';
      if (result.bulls === 4) {
        isWin = true; 
        console.log("Win", number);
        const win = document.createElement("span");
        win.innerText = `Победа! (Попыток: ${attempts})`;
        win.classList.add('win')
        attemptsList.append(win);
        return;
      }
    }
  });
};

export default game;
