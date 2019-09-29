

var topics =["Michael Jordan", "Mike Tyson", "Usain Bolt", "Terrell Owens", "Derek Jeter", "Conner McGreggor", "Babe Ruth", "Rob Gronkowski", "Draymond Green", "Magic Johnson", "Chad Johnson", "Peyton Manning", "Brett Favre","Stephen Curry", "Dirk Nowitzki"];





//************************************************************************** */


// Function that creates buttons from items in array

function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttonspace").empty();

    // Looping through the array of topics
    for (var i = 0; i < topics.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array.
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class
      a.addClass("topic");
      // Adding a data-attribute with a value of the movie at index i
      a.attr("data-name", topics[i]);
      // Providing the button's text with a value of the movie at index i
      a.text(topics[i]);
      // Adding the button to the HTML
      $("#buttonspace").append(a);
    }
  }


   // This function handles events where one button is clicked
   $("#add-movie").on("click", function(event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var movie = $("#movie-input").val().trim();
    // The movie from the textbox is then added to our array
    movies.push(movie);

    // calling renderButtons which handles the processing of our movie array
    renderButtons();
  });










  renderButtons();