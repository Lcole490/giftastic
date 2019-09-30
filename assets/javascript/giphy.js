

var topics =["Michael Jordan", "Mike Tyson", "Usain Bolt", "Terrell Owens", "Derek Jeter", "Conner McGreggor", "Babe Ruth", "Rob Gronkowski", "Draymond Green", "Magic Johnson", "Chad Johnson", "Peyton Manning", "Brett Favre","Stephen Curry", "Dirk Nowitzki"];

var limit = 10;



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


  function displayTopicInfo() {

    
      // Adding click event listen listener to all buttons
      $("button").on("click", function() {
        // Grabbing and storing the data-animal property value from the button
        // $("#topic-display").empty();

    var btntopic = $(this).attr("data-name");
    console.log($(this).attr("data-name"));
    console.log($(this).data("name"));
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?&q=" + btntopic + "&limit="+ limit + "&api_key=1OtT6QlByI3EUxw1FIOLGVLe506YCGbo";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        $("#topic-display").empty();

        console.log(response);
        for (var j=0; j<limit; j++){


        

      // Creating a div to hold the movie
      var topicDiv = $("<div class='topic'>");

      // Storing the rating data
      var rating = response.data[j].rating;

      // Creating an element to have the rating displayed
      var pRating = $("<p>").text("Rating: " + rating);

      // Displaying the rating
      topicDiv.append(pRating);




      // Retrieving the URL for the image
      var imgURL = response.data[j].images.fixed_height_still.url;

      // Creating an element to hold the image
      var image = $("<img>").attr("src", imgURL);

      image.addClass("gif");

      // Appending the image
      topicDiv.append(image);

      // Putting the entire movie above the previous movies
      $("#topic-display").append(topicDiv);


}

    });


      });


    
  }














   // This function handles events where one button is clicked
   $("#add-topic").on("click", function(event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var topic = $("#topic-input").val().trim();
    // The movie from the textbox is then added to our array
    topics.push(topic);

    console.log(topic);
    console.log(topics);

    // calling renderButtons which handles the processing of our movie array
      // Adding a click event listener to all elements with a class of "topic"
$(document).on("click", ".topic", displayTopicInfo);
// Calling the renderButtons function to display the intial buttons
    
    renderButtons();
  });


















  


  renderButtons();

  displayTopicInfo();