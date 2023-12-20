let bool = false;
let inputElementread = document.getElementsByClassName('svelte-e27s92')[1];
let inputElement = document.getElementsByClassName("svelte-e27s92")[1]
let hashForAAA = document.getElementsByClassName("svelte-1fdvo7g")[25].getAttribute('src').substring(110, 290);
let havetorestartmain = false;
let time = 0;
const database = {
    
}
;
let buttonElement = document.getElementsByClassName("terminal svelte-2fhq5c")[0];
    // Function to update database
    // "Database" object to store the hash and associated name
    const updateDatabase = () => {
        if (time < 1){
            time = 2;
        if (!(hashForAAA in database)) {
        console.log(inputElement+"aaa");
        
        database[hashForAAA] = inputElement;
        console.log('Database updated:', database);}
        else {
            console.log('Hash already exists in the database:', hashForAAA);
        }
        window.setTimeout(function(){time = 0;},500);
    }}
    
    ;
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
} console.log("In main disabling condition") ;havetorestartmain = false; }
catch{console.log("still not in windows trying again");

    inputElementread = document.getElementsByClassName('svelte-e27s92')[1];
    buttonElement = document.getElementsByClassName("terminal svelte-2fhq5c")[0];
    return;


}
};

window.setInterval(function(){
    
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
    else{
        //console.log(inputElementread);
       
    }
    
},1000);
main();

   
