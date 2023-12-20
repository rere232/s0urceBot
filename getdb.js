
function stringToHash(string) {
    let hash = 0;
    if (string.length == 0) return hash;
    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

// "Database" object to store the hash and associated name
const database = {};

// Get the input element
let inputElement = document.getElementsByClassName("svelte-e27s92")[1]
// Define the hash function
const buttonElement = document.getElementsByClassName("terminal svelte-2fhq5c")[0];

if (inputElement && buttonElement) {
    // Pre-compute hash for "aaa"
    

    // Function to update database
    const updateDatabase = () => {
        hashForAAA = stringToHash(document.getElementsByClassName("svelte-1fdvo7g")[25].getAttribute('src').substring(110, 290))
        inputElement = document.getElementsByClassName("svelte-e27s92")[1].value
        database[hashForAAA] = inputElement.value;
        console.log('Database updated:', database);
    };

    // Add listener to the button for the click event
    buttonElement.addEventListener('click', updateDatabase);
} 
