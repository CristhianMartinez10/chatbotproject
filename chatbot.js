var responses = {
  "how are you?" : "I am good, how are you?",
  "how old are you?" : "Didn't your parents teach you not to ask a women her age!",
  "what is your name?" : "My name is Karen. What is yours?",
  "what time is it?" : "Time for you to get a watch.",
  "good" : "cool"
}

function askQuestion() {
  var input = document.getElementById("input").value;
  input = input.toLowerCase();
  var giveresponse = responses[input]
  if (giveresponse == undefined){
    var fallBackReponse = ["Sorry I didn't get that.", "What do you mean?"]
    var rand = Math.floor((Math.random() * fallBackReponse.length));
    var fallBack = fallBackReponse[rand]
    document.getElementById("chat-area").textContent += input + ": " + fallBack + " ";
  }

  else {
    document.getElementById("chat-area").textContent += input + ": " + giveresponse + " ";
  }

}
