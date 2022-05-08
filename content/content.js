chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.command == 'clickElement'){
        //Figure out way to pass in dynamic element id to click on
    }
    else if (request.command == 'scrollDown'){
        //Scroll down 500 pixels
        window.scrollBy(0, 500);
    }
    else if (request.command == 'scrollUp'){
        //Scroll up 500 pixels
        window.scrollBy(0, -500);
    }
    else if (request.command == 'scrollTop'){
        //Scroll to top of the page, dynamically rendered based on page size
        window.scrollTo(document.body.scrollHeight || document.documentElement.scrollHeight, 0);
    }
    else if (request.command == 'scrollBottom'){
        //Scroll to bottom of the page, dynamically rendered based on page size
        window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
    }
    else if (request.command == 'goNextPage'){
        // go to next page
        window.history.go(1);
    }
    else if (request.command == 'goPreviousPage'){
        // go to previous page
        window.history.go(-1);
    }
    else if (request.command == 'pageRefresh'){
        // refresh page
        window.location.reload();
    }
    else if(request.command == 'loadUrl'){
        // Load specific URL passed in
        window.location.href = "http://stackoverflow.com";// Pass in object name, which is populated by another text box value
    }
    else if (request.command == 'MacroOne'){
        // Fetch exact value set in text box and execute here
    }
});
