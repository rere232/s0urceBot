let datahasbeensaved = "";
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "saveData") {
        datahasbeensaved = request.data;
    }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "dlDATA") {
        console.log("saving data"); 
        
        saveDataToFile(datahasbeensaved); // The function you want to run
    
    }
});


function saveDataToFile(data) {
    let jsonStr = JSON.stringify(data);
    
    // Replace each comma with a comma followed by a backspace
    jsonStr = jsonStr.replace(/,/g, ",\n");

    // Encode the JSON string to base64
    const base64Data = btoa(unescape(encodeURIComponent(jsonStr)));

    // Create a data URL for the base64 encoded data
    const dataUrl = `data:application/json;base64,${base64Data}`;

    // Trigger the download using the data URL
    chrome.downloads.download({
        url: dataUrl,
        filename: "dbtest.json"
    });
}
