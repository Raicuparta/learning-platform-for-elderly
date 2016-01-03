var randomQuotes =  [
                          "Alguma coisa em que possa ajudar?",
                          "Está tudo bem consigo?",
                          "Sempre ao seu dispor!",
                          "Obrigado!" 
                        ]

    function send(){
        document.getElementById("answer").className = "text-right";
        document.getElementById("dropdown").className = "dropdown-menu dropdown-menu-right dropdown-menu-static";
        var input = document.getElementById("chatBox").value;
        var answer = document.getElementById("answer");
        var fixedQuote = document.getElementById("quote");
        var index = Math.floor(Math.random() * randomQuotes.length); 
        answer.innerHTML = "Eu: " + input;
        fixedQuote.innerHTML = "Professor: " + randomQuotes[index];
        document.getElementById("chatBox").value = "";
    } 

    function toggleDiv()
    {
    if (document.getElementById("dropdown").style.display == "block" ) {
       document.getElementById("dropdown").style.display="none";

    } else {
      document.getElementById("dropdown").style.display="block";

    }
  }