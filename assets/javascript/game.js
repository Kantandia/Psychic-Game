<script>
    // VARIABLES
    // ==========================================================================
    // The array of letters for the computer to pull from
    var computerChoices = ["a","b","c","d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
      { q: "a", a: "t" },
      
    ];
    // We start the game with a score of 0.
    var score = 0;
    // Variable to hold the index of current question.
    var questionIndex = 0;
    // FUNCTIONS
    // ==============================================================================
    // Function to render questions.
    function renderQuestion() {
      // If there are still more questions, render the next one.
      if (questionIndex <= (questions.length - 1)) {
        document.querySelector("#question").innerHTML = questions[questionIndex].q;
      }
      // If there aren't, render the end game screen.
      else {
        document.querySelector("#question").innerHTML = "Game Over!";
        document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
      }
    }
    // Function that updates the score...
    function updateScore() {
      document.querySelector("#score").innerHTML = "Score: " + score;
    }
    // MAIN PROCESS
    // ==============================================================================
    // Calling functions to start the game.
    renderQuestion();
    updateScore();
    // When the user presses a key, it will run the following function...
    document.onkeyup = function(event) {
      // If there are no more questions, stop the function.
      if (questionIndex === questions.length) {
        return;
      }
      // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
      var userInput = event.key.toLowerCase();
      // Only run this code if "t" or "f" were pressed.
      if (userInput === "t" || userInput === "f") {
        // If they guess the correct answer, increase and update score, alert them they got it right.
        if (userInput === questions[questionIndex].a) {
          alert("Correct!");
          score++;
          updateScore();
        }
        // If wrong, alert them they are wrong.
        else {
          alert("Wrong!");
        }
        // Increment the questionIndex variable and call the renderQuestion function.
        questionIndex++;
        renderQuestion();
      }
    };
  </script>