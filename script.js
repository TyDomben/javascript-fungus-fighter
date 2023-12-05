// State Variables can be declared outside of the onReady
 // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

let playerAP = 100; // Initial Attack Points for the player
let fungusHP = 100; // Initial Hit Points for the Freaky Fungus

const apText = document.querySelector('.ap-text');
const hpText = document.querySelector('.hp-text');
const apMeter = document.getElementById('ap-meter');
const hpMeter = document.getElementById('hp-meter');
const freakyFungus = document.querySelector('.freaky-fungus');


function onReady() {
    console.log("Ready to go!")
    
   
}


onReady()