function setup() {
  // initial p5js
  noCanvas();
};
// Set the date we're counting down to
var countDownDate = new Date("Jun 9, 2018 00:00:00").getTime();

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
  var textP = createP(join(data, "<br/> <br/>"));
  var div1 = createDiv('');
  div1.id('txtBox');
  textP.parent('txtBox');
  div1.parent('luvLetter');
};


function createHeart() {

  var chest = createDiv('');
  chest.id('chest');
  chest.parent('luvLetter');

  var $button = $('<button id="heart" class="heart center" value="My Love" />');
  // $button.appendTo($("#luvLetter"));
  $button.appendTo($("#chest"));

  var divL = createDiv('');
  var divR = createDiv('');
  divL.class('heart left side top');
  divR.class('heart right side');
  divL.parent('chest');
  divR.parent('chest');

  var click = select("#heart");
  click.mousePressed(loadFile);
};

function fadedFire() {

}
