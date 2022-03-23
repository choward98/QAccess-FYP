// document.addEventListener('DOMContentLoaded', function() {

//     document.getElementById("exitApp").addEventListener("click", function(){
//         window.close();
//     });

//     document.getElementById("addNewMacro").addEventListener("click", function(){
//         chrome.runtime.reload();
//         chrome.browserAction.setPopup({popup: "../html/addMacro.html"});
//     });

//     // Open top 5 listed popular videos in different tabs after clicking button
//     var vidOne = document.getElementById
//     document.getElementById("youtubeMacro").addEventListener("click", function(){
//         w = window.open("https://www.youtube.com/feed/trending");
//         setTimeout(() => {  console.log("Waiting"); }, 2000);

//         videos = document.getElementsByClassName("yt-simple-endpoint style-scope ytd-video-renderer");
//         videos[0].click()
//     })
// })

document.addEventListener('DOMContentLoaded', function() {
    function clickButton(){
        chrome.tabs.executeScript({
            file: 'content.js'
        })
    }
    document.getElementById("youtubeMacro").addEventListener('click', clickButton)    
})

/*
    Sends a command to the browser session ,telling the browser what actions to perfom
    msg = commandToRun
    elementToClick = whatever element needs to be selected
*/

// function runCommand(command){
//     if (command == 'selectLink' && command.objectToPress){
//         // Get object to press returned
//         elementId = command.objectToPress
//         document.querySelector(elementId)
//         const buttons = document.querySelectorAll('style-scope ytd-thumbnail')
//     }
//     else if (commands == 'selectButton' && command.objectToPress){
//         elementId = command.objectToPress
//     }
//     else if (command == 'scrollDown'){
//         window.scrollBy(0, -500);
//     }
//     else if (command == 'scrollUp'){
//         window.scrollBy(0, 500);
//     }
//     else if (command == 'goBack'){
//         window.history.back();
//     }
//     else if (command =='goForward'){
//         window.history.forward();
//     }
//     else if (command == 'goTop'){
//         window.scrollTo(0, 0);
//     }
//     else if (command == 'goBottom'){
//         window.scrollTo(0, 0);
//         window.scrollTo(0, document.body.scrollHeight);
//     }
//     else if (command == 'searchGoogle'){
//         window.open('http://google.com/search?q='+ request.objectToPress, "_self");
//     }
//     else if (command == 'goToTab' && command.objectToPress){
//         tabID = chrome.tabs
//     }
//     else if (command == 'refreshPage'){
//         location.reload();
//     }
// }
