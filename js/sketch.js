function loadFile() {
  loadStrings("23happiness.txt", fileLoaded);
};

function fileLoaded(data) {
  createP(join(data, "<br/>"));
};

// function fileSelected(file) {
//   createP(file.name + " " + file.size + " " + file.type);
//
//   if (file.type == "text") {
//     createP(file.data);
//   } else {
//     createP("I need a text file.");
//   };
// };

function setup() {
  noCanvas();

  createFileInput(fileSelected);

  var button = select("#loadfile");
  button.mousePressed(loadFile);
};
