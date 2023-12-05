// State Variables can be declared outside of the onReady

// 🧠 Remember

// - Handle events that -> - Updates state which is -> - Rendered to the DOM

let playerAP = 100; // Initial Attack Points for the player
let fungusHP = 100; // Initial Hit Points for the Freaky Fungus

const apText = document.querySelector(".ap-text");
const hpText = document.querySelector(".hp-text");
const apMeter = document.getElementById("ap-meter");
const hpMeter = document.getElementById("hp-meter");
const freakyFungus = document.querySelector(".freaky-fungus");

document
  .querySelector(".arcane-scepter")
  .addEventListener("click", () => performAttack(12, 14));
document
  .querySelector(".entangle")
  .addEventListener("click", () => performAttack(23, 9));
document
  .querySelector(".dragon-blade")
  .addEventListener("click", () => performAttack(38, 47));
document
  .querySelector(".star-fire")
  .addEventListener("click", () => performAttack(33, 25));

function performAttack(apCost, hpDamage) {
    if (playerAP >= apCost) {
//adjustment for AP and HP
        playerAP -= apCost;
        fungusHP -= hpDamage;

  console.log(`Player AP: ${playerAP}, Freaky Fungus HP: ${fungusHP}`);

  // Update the DOM to reflect the new state
  updateDOM();
  // Check if the game has been won or lost
  checkGameStatus();
}

function updateDOM() {
    apText.textContent = `${playerAP} AP`;
    hpText.textContent = `${fungusHP} HP`;
    apMeter.value = playerAP;
    hpMeter.value = fungusHP;
}


function onReady() {
  console.log("Ready to go!");
}

function checkGameStatus() {
    if (fungusHP <= 0) {
        fungusHP = 0; // Ensure HP doesn't go below 0
        freakyFungus.classList.replace('walk', 'dead');
        disableAttackButtons();
        console.log("You win! The Freaky Fungus is defeated.");
    } else if (playerAP <= 0) {
        playerAP = 0; // Ensure AP doesn't go below 0
        freakyFungus.classList.replace('walk', 'jump');
        disableAttackButtons();
        console.log("You lose! Humanity is doomed.");
    }
}

function disableAttackButtons() {
    document.querySelectorAll('.attack-btn').forEach(button => button.disabled = true);
}
onReady();
}