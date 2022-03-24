document.addEventListener('DOMContentLoaded', function() {

  document.getElementById("backBtn").addEventListener("click", function(){
    chrome.browserAction.setPopup({popup: "../html/index.html"});
  });

  document.getElementById("helpBtn").addEventListener("click", function(){
    chrome.tabs.create({
      url: chrome.extension.getURL("html/welcome.html"),
      active: true
    })
  });

  document.getElementById("saveMacro").addEventListener("click", function(){
      var actionOne = document.getElementById("actionOne").value;
      var actionTwo = document.getElementById("actionTwo").value;
      var actionThree = document.getElementById("actionThree").value;
      var params = {
        'actOne': actionOne,
        'actTwo': actionTwo,
        'actThree': actionThree
      }

    chrome.storage.sync.set(params, function() {
      alert('Success!');
    });
  });
})
