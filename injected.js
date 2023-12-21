let bool = false;
let inputElementread = document.getElementsByClassName('svelte-e27s92')[1];
let inputElement = document.getElementsByClassName("svelte-e27s92")[1]
let hashForAAA = document.getElementsByClassName("svelte-1fdvo7g")[25].getAttribute('src').substring(110, 290);
let havetorestartmain = false;
let time = 0;
let buttonElement = document.getElementsByClassName("terminal svelte-2fhq5c")[0];
let hashTextMap
async function loadHashTextMap() {
    console.log("In loadHashTextMap");
    try {
        console.log("Loading dbtest.json...");
        // Fetch the local JSON file
        const response = await fetch(chrome.runtime.getURL('dbtest.json'));
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        hashTextMap = await response.json(); // Assign the fetched data to hashTextMap

        // You can now use hashTextMap in your script
        console.log("dbtest.json loaded successfully!");
        console.log(hashTextMap);
    } catch (error) {
        console.error('Failed to load dbtest.json:', error);
    }
}

function sendDataToBackground() {
    chrome.runtime.sendMessage({ action: "saveData", data: hashTextMap });
}


function getTextForHash(hash) {
    
    return hashTextMap[hash] || 0;
    
}


/*function stringToHash(string) {
 
    let hash = 0;
 
    if (string.length == 0) return hash;
 
    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    return hash;
}*/
 

function selectvictim(){
console.log("wlh jla dev tjr la att");
}



function launchScript() {
    let tohash = "";
    let hash = "";
    let text = "";
    
    try{
    console.log(document.getElementsByClassName("svelte-1fdvo7g")[25]);
    hash = document.getElementsByClassName("svelte-1fdvo7g")[25].getAttribute('src').substring(110, 290);
    console.log(tohash);
// get corresponding text
    

    text = getTextForHash(hash/*tst normal hash */);
    console.log(text);
    let inputField = document.getElementsByClassName("svelte-e27s92")[1];
    if(text != 0){
// Press the enter text and press button
    // Set the value
        inputField.value = text;
    
    // Create and dispatch an 'input' event
        let event = new Event('input', { bubbles: true });
        inputField.dispatchEvent(event);
        document.getElementsByClassName("terminal svelte-2fhq5c")[0].click();

    }
    else {console.log("not found")}
}

    catch{
        selectvictim();console.log("still not in windows trying again");
    }
    
}





















    // Function to update database
    // "Database" object to store the hash and associated name

    function updateDatabase(){
        if (time < 1){
            time = 2;
            if (!(hashForAAA in hashTextMap)) {
                console.log(inputElement+"aaa");
        
                hashTextMap[hashForAAA] = inputElement;
                console.log('Database updated:', hashTextMap);
                sendDataToBackground();
                
                }
            else {
                console.log('Hash already exists in the database:', hashForAAA);
            }
        window.setTimeout(function(){time = 0;},500);
    }}
    
    
    // Function to get hash from text
/*function stringToHash(string) {
    let hash = 0;
    if (string.length == 0) return hash;
    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
    
}*/
function onUserTyping(){
    hashForAAA = document.getElementsByClassName("svelte-1fdvo7g")[25].getAttribute('src').substring(110, 290);
    console.log(hashForAAA);
    // testing normally -1296637066 hashForAAA = stringToHash("MU/TURTFf6UVBDQEGIwGqBWJWHBggKRtQpxImBjEwcSP4dJB42dgcmBiNkY21BD0I2gEAoZgCBCig4FSW6ptzTXn39y+NMTJcJOX/+t759537j33Fv7NckANWOECWe6ikqqKVOx/PtwGxIEEcKkFqd/AG6Ad6AF69Q2tG7gO3AAGtPdm8YeB");
    inputElement = document.getElementsByClassName("svelte-e27s92")[1].value;
}



// Get the input element

// Define the hash function
function main(){
    try{
        inputElementread.addEventListener('input', onUserTyping);
        if (inputElement && buttonElement) {
        // Add listener to the button for the click event
        buttonElement.addEventListener('click', updateDatabase);
        }  
    console.log("In main disabling condition") ;havetorestartmain = false; }
    catch{
        console.log("still not in windows trying again");
        inputElementread = document.getElementsByClassName('svelte-e27s92')[1];
        buttonElement = document.getElementsByClassName("terminal svelte-2fhq5c")[0];
        return;
    }
};


window.setInterval(function(){
    launchScript();
    
    inputElementread = document.getElementsByClassName('svelte-e27s92')[1];
    buttonElement = document.getElementsByClassName("terminal svelte-2fhq5c")[0];
    if (inputElementread == null || havetorestartmain == true){
        console.log("ipstart"+inputElementread);
        if (bool == false){
            console.log("off main enabling condition");
            havetorestartmain = true;
            bool = true;
            console.log("not in windows relaunching main");console.log("Main Relaunched");
            main();
            bool = false;       
        }
    }
   
},700);
loadHashTextMap();
main();


   
