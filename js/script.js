

// Set the date we're counting down to
var countDownDate = new Date("Jun 4, 2018 23:48:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("clock").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);

        document.getElementById("display").innerHTML = "here";
        createButton();



        function loadFile() {
          loadStrings("23happiness.txt", fileLoaded);
        };

        function fileLoaded(data) {
          createP(join(data, "<br/>"));
        };

        function setup() {
          noCanvas();
          var button = select("#loadfile");
          button.mousePressed(loadFile);
        };
    }
}, 1000);

function createButton() {
  var $button = $('<button id="loadfile" value="new button" />');
  $button.appendTo($("#display"));

}
