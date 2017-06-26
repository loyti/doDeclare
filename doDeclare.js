var num = [0, 13, 23, -1];
var numClass = ["super", "round", "goat", "neg"]
var pairNum = [" is a very well rounded number by design</p>"," some say this number is possibly <em><b>superstitiuos</b></em>...</p>", "is MJ's number. GOAT!</p>", " is the only negative number because I'm an optimist by design</p>"];
var earthRound;
var earthFlat;
var zxy = null;
        
function numCall (){
    earthRound = true;
    if (earthRound == true) {
        for (var i = 0; i < num.length; i++){
            document.write(num[i] + "<p class=\"" + numClass + "\">" + pairNum[i]);
            }
    } else  {
            document.write("<p class=\"null\">Christopher Columbus was wrong all along.</p>");
    }
}
numCall()
