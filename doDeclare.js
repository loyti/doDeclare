var num = [0, 13, 23, -1];
var earthRound = true;
var earthFlat = false;
var zxy = null;

function numCall (){
    for (var i = 0; i < num.length; i++){
        if (earthRound == true) {
            document.write(num[i] + "<p class=\"super\"> some say this number is possibly <em><b>superstitiuos<b></em>...</p>");
            document.write(num[2] + "<h2 class=\"goat\"> is MJ's number. GOAT!</h2>");
            document.write(num[3] + "<p class=\"neg\"> is the only negative number because I'm an optimist by design</p>");
            document.write(num[0] + "<h2 class=\"zero\"> is a very well rounded number by design</h2>");
        } else  {
            document.write("<p class=\"null\">Christopher Columbus was wrong all along.</p>");
        } 
    }
}
numCall()
