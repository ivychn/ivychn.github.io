var text = ["AMBIENT", "ˈ/ambēənt/"]
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 2500);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}

// somber

var text2 = ["SOMBER", "ˈ/ˈsämbər/"]
var counter2 = 0;
var elem2 = document.getElementById("changeText2");
var inst2 = setInterval(change2, 2500);

function change2() {
  elem2.innerHTML = text2[counter2];
  counter2++;
  if (counter2 >= text2.length) {
    counter2 = 0;
  }
}

// hype

var text3 = ["HYPE", "ˈ/hīp/"]
var counter3 = 0;
var elem3 = document.getElementById("changeText3");
var inst3 = setInterval(change3, 2500);

function change3() {
  elem3.innerHTML = text3[counter3];
  counter3++;
  if (counter3 >= text3.length) {
    counter3 = 0;
  }
}

// between

var text4 = ["BETWEEN", "ˈ/bəˈtwēn/"]
var counter4 = 0;
var elem4 = document.getElementById("changeText4");
var inst4 = setInterval(change4, 2500);

function change4() {
  elem4.innerHTML = text4[counter4];
  counter4++;
  if (counter4 >= text4.length) {
    counter4 = 0;
  }
}

