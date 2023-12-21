

document.getElementById("save").addEventListener("click", function() {
    chrome.runtime.sendMessage({action: "dlDATA"});
});

document.getElementById("launch").addEventListener("click", function() {

    
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        
        chrome.scripting.executeScript(
            {
                target: { tabId: tabs[0].id },
                files: ['injected.js'],
            });
           // ("a");
    });
  });
  


