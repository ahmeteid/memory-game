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

shuffle(orderRange);

// =
// let orderRange = Array.from(Array(blocks.length).keys());

// Add order Css property to game blocks
blocks.forEach((block, index) => {
    block.style.order = orderRange[index];
});

// Shuffle Function
function shuffle(array) {

    // Settings Vars
    let current = array.length;
    let random;
    let temp;

    while(current > 0) {

        // Get random Number
        random = Math.floor(Math.random() * current);

        // Decrease length by one 
        current--;

        // [1] Save current element in stash
        temp = array[current];

        // [2] Current element = Random element
        array[current] = array[random];

        // [3] Random element = Get element from Stash
        array[random] = temp;
    }

    return array;
}