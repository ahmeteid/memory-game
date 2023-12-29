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

    // Add click event 
    block.addEventListener("click", function() {

        // Tregger the flip block element
        flipBlock(block);

    });
});

// Flip Block Function
function flipBlock(selectedBlock) {

    // Add class is-flipped
    selectedBlock.classList.add("is-flipped");

    // Collect all flipped cards
    let allFllippedBlock = blocks.filter(flippedBlock => flippedBlock.classList.contains("is-flipped"));

    // If theres two selected Blocks
    if(allFllippedBlock.length === 2) {

        // Stop clicking function

        // Check matched block function
    }
}

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