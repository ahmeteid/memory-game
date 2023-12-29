// Select the start game button
document.querySelector(".control-buttons span").onclick = function() {

    // Prompt window to ask for Name
    let yourName = prompt("What is your name? ");

    // if name is empty
    if(yourName == null || yourName == "") {
        
        // Set name to unknown
        document.querySelector(".name span").innerHTML = "UnKnown";

        // Name is not empty
    } else {

        // Set name to yourName
        document.querySelector(".name span").innerHTML = yourName;

    }

    // Remove splash screen
    document.querySelector(".control-buttons").remove();
};

let duration = 1000;

let blocksContainer = document.querySelector(".memory-game-blocks");

let blocks = Array.from(blocksContainer.children);

let orderRange = [...Array(blocks.length).keys()];

console.log(orderRange);