import genNumber from "./src/genNumber.js";
import validateInput from "./src/validateInput.js";
import startCreature from "./src/creatureEye.js";
import game from "./src/game.js"

const removeMsg = () => {
  document.querySelector("#message").remove();
  document.querySelector(".game").style.display = "flex";
  document.querySelector(".flag").innerText = "Быки-коровы";
  
  document.removeEventListener("click", removeMsg)
  document.removeEventListener("keydown", removeMsg)
}
document.addEventListener("click", removeMsg)
document.addEventListener("keydown", removeMsg)

startCreature();

game()

