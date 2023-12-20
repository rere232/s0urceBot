




function getTextForHash(hash) {
    const hashTextMap = {
        "31443635": "Text for hash 31443635",
        "anotherHashValue": "Corresponding text",
        // Add more hash-text pairs as needed
    };
    return hashTextMap[hash] || "Default text if hash not found";
    
}

launchScript();
function stringToHash(string) {
 
    let hash = 0;
 
    if (string.length == 0) return hash;
 
    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    return hash;
}
 

function selectvictim(){
console.log("wlh jla dev tjr la att");
}



function launchScript() {
    let tohash = "";
    let hash = "";
    let text = "";
    try{
    tohash = document.getElementsByClassName("svelte-1fdvo7g")[25].getAttribute('src').substring(110, 290);
    console.log(tohash);
// get corresponding text
    console.log(stringToHash(tohash));
    hash = stringToHash(tohash);
    text = getTextForHash(hash);
    console.log(text);
    let inputField = document.getElementsByClassName("svelte-e27s92")[1];

// Press the enter text and press button
    // Set the value
        inputField.value = text;
    
    // Create and dispatch an 'input' event
        let event = new Event('input', { bubbles: true });
        inputField.dispatchEvent(event);
        document.getElementsByClassName("terminal svelte-2fhq5c")[0].click();
    }

    catch{
        selectvictim();
    }
    
}
