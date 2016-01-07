function generateMadlib() {
  
  // This is the starting story
  var story =  "Ho ho Merry Christmas to all";
               "Teas the season to be ADJECTIVE";
  


  var inputValue = document.getElementById("plural-noun-1").value;
  story = story.replace("PLURAL_NOUN", inputValue);
  
  inputValue = document.getElementById("verb").value;
  story = story.replace("VERB", inputValue);
  
  inputValue = document.getElementById("adjective").value;
  story = story.replace("ADJECTIVE", inputValue);
  // This writes the story when the user clicks the "Generate MadLib" button"
  document.getElementById("result").innerHTML = story;
}