function setup() {
  // initial p5js
  noCanvas();
};
// Set the date we're counting down to
var countDownDate = new Date("Jun 5, 2018 22:40:00").getTime();

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
    document.getElementById("clock").innerHTML = "還有 " + days + "天 " + hours + "時 "
    + minutes + "分 " + seconds + "秒 ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);

        document.getElementById("clock").innerHTML = "Happy Birthday, mon amour.";
        createHeart();


    }
}, 1000);

function loadFile() {
  loadStrings("23happiness.txt", fileLoaded);
};

function fileLoaded(data) {
  createP(join(data, "<br/>"));
};

function createHeart() {
  var $button = $('<button id="demo" value="new button" />');
  $button.appendTo($("#luvLetter"));
  var click = select("#demo");
  click.mousePressed(loadFile);

};

function fadedFire() {

}
