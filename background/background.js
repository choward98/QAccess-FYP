document.addEventListener('DOMContentLoaded', function() {

// All code for remote control section of browser UI
    var clickElementbtn = document.getElementById("clickElement")
    if (clickElementbtn){
        clickElementbtn.addEventListener("click", function(){
            sendMessagetoContext("clickElement");
        })
    }

    var scrollDownBtn = document.getElementById("scrollDown")
    if (scrollDownBtn){
        scrollDownBtn.addEventListener("click", function(){
            sendMessagetoContext("scrollDown");
        })
    }

    var scrollUpBtn = document.getElementById("scrollUp")
    if (scrollUpBtn){
        scrollUpBtn.addEventListener("click", function(){
            sendMessagetoContext("scrollUp");
        })
    }

    var loadUrlBtn = document.getElementById("loadURL")
    if (loadUrlBtn){
        loadUrlBtn.addEventListener("click", function(){
            sendMessagetoContext("scollDownAndUp");
        })
    }

    var refreshPageBtn = document.getElementById("pageRefresh")
    if (refreshPageBtn){
        refreshPageBtn.addEventListener("click", function(){
            console.log("REFRESH BUTTON CLICKED")
            sendMessagetoContext("pageRefresh");
        })
    }

    var prevPageBtn = document.getElementById("goPreviousPage")
    if (prevPageBtn){
        prevPageBtn.addEventListener("click", function(){
            sendMessagetoContext("goPreviousPage");
        })
    }

    var nextPageBtn = document.getElementById("goNextPage")
    if (nextPageBtn){
        nextPageBtn.addEventListener("click", function(){
            sendMessagetoContext("goNextPage");
        })
    }

    var scrollTopBtn = document.getElementById("scrollTop")
    if (scrollTopBtn){
        scrollTopBtn.addEventListener("click", function(){
            sendMessagetoContext("scrollTop");
        })
    }

    var scrollBtmBtn = document.getElementById("scrollBottom")
    if (scrollBtmBtn){
        scrollBtmBtn.addEventListener("click", function(){
            sendMessagetoContext("scrollBottom");
        })
    }

    var addMacroBtn = document.getElementById("addNewMacro")
    if (addMacroBtn){
        addMacroBtn.addEventListener("click", function(){
            chrome.browserAction.setPopup({popup: "../html/addMacro.html"});
        })
    }

    var exitBtn = document.getElementById("exitApp")
    if (exitBtn) {
        exitBtn.addEventListener("click", function(){
            window.close();
        })
    }

    var helpBtn = document.getElementById("helpBtn")
    if (helpBtn) {
        helpBtn.addEventListener("click", function(){
            chrome.tabs.create({
                url: chrome.extension.getURL("html/welcome.html"),
                active: true
            })
        })
    }


// All custom macro code below
    var customMacro = document.getElementById("CustomMacroOne")
    if (customMacro){
        customMacro.addEventListener("click", function(){
            

            chrome.storage.sync.get('actOne', function(response){
                var actionOne = response.actOne
                console.log(actionOne); // Logged response from stored user session is working
                sendMessagetoContext(actionOne.toString())
            });
            chrome.storage.sync.get('actTwo', function(response){
                var actionTwo = response.actTwo
                console.log(actionTwo); // Logged response from stored user session is working
                sendMessagetoContext(actionTwo.toString())
            });
            chrome.storage.sync.get('actThree', function(response){
                var actionThree = response.actThree
                console.log(actionThree); // Logged response from stored user session is working
                sendMessagetoContext(actionThree.toString())
            });
        });
    }
})

function sendMessagetoContext (msg, objectToPress){
    chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {command: msg})
    })
};

chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({
        url: chrome.extension.getURL("html/welcome.html"),
        active: true
    })
});
