window.onload = initPage;


var colors = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
var randomColor = 0;
var newQuoteProgram = true;
var quoteInfo = null;


function initPage() {
    document.getElementById("new-quote-button").addEventListener("click", fetchQuotation);
    document.getElementById("twitter-button").addEventListener("click", sendToTwitter);
    changeColors();
}




function changeQuote(jsonData) {
    document.getElementById("quote-text").innerHTML = " " + jsonData.quote;
    document.getElementById("quote-author").innerHTML = "- " + jsonData.author;
    quoteInfo = jsonData;
    changeColors();
}


function changeColors() {
    
    var bodyColor = document.getElementById("body-style");
    var nextQuoteButtonColor = document.getElementById("new-quote-button");
    var twitterButtonColor = document.getElementById("twitter-button");
    var quotationText = document.getElementById("quotation");
    var authorText = document.getElementById("quote-author");
    
    if(!newQuoteProgram) {
        console.log("Test");
        bodyColor.classList.remove("body-color-" + colors[randomColor]);
        nextQuoteButtonColor.classList.remove("body-color-" + colors[randomColor]);
        twitterButtonColor.classList.remove("font-color-" + colors[randomColor]);
        quotationText.classList.remove("font-color-" + colors[randomColor])
        authorText.classList.remove("font-color-" + colors[randomColor]);
        
    }
  
    randomColor = Math.floor((Math.random() * 10));
    
    bodyColor.classList.add("body-color-" + colors[randomColor]);
    nextQuoteButtonColor.classList.add("body-color-" + colors[randomColor]);
    twitterButtonColor.classList.add("font-color-" + colors[randomColor]);
    quotationText.classList.add("font-color-" + colors[randomColor])
    authorText.classList.add("font-color-" + colors[randomColor]);
    
    newQuoteProgram = false;
    
}

function fetchQuotation() {
    var apiLocation = 'https://talaikis.com/api/quotes/random/';
    var fileRequest = new XMLHttpRequest();
    
    fileRequest.onreadystatechange = function() {
        
        if(fileRequest.readyState == 4) {
            if (fileRequest.status == 200) {
                var data = JSON.parse(fileRequest.responseText);
                changeQuote(data);
            }
        }
    };
    
    fileRequest.open('GET', apiLocation);
    fileRequest.send();
}

function sendToTwitter() {
    
    if (quoteInfo != null) {
        window.open("https://twitter.com/intent/tweet?text=" + quoteInfo.quote + " - " + quoteInfo.author);
    }

    return;
    
}