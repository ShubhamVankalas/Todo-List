let testBool = true;

light();

function toggle() {
  testBool = !testBool;
  darkMode();
}

function darkMode() {
  if (testBool == true) {
      light() ;
  } else if (testBool == false) {
      dark() ;
  }
}

function light() {
    //  BACKGROUNG IMAGE
  document.getElementById("darkmodetoggle").classList.remove("night-bg");
  document.getElementById("darkmodetoggle").classList.add("day-bg");
    // BODY COLOR
  document.getElementById("body").style.backgroundColor = "#FFF";
    // NAV BAR COLORS
  document.getElementById("taskbar-items").style.backgroundColor = "rgb(246, 246, 246)";
  document.getElementById("taskbar-items").style.color = "rgb(61, 61, 61)";
    // TASKS
  document.getElementById("tasks").style.backgroundColor = "rgb(246, 246, 246)";
    // TASK ITEMS
  document.getElementById("item1").style.backgroundColor = "rgb(231, 231, 231)";
  document.getElementById("item2").style.backgroundColor = "rgb(231, 231, 231)";
  document.getElementById("item3").style.backgroundColor = "rgb(231, 231, 231)";
  document.getElementById("item1").style.color = "#121212";
  document.getElementById("item2").style.color = "#121212";
  document.getElementById("item3").style.color = "#121212";
}

function dark() {
    //  BACKGROUNG IMAGE
    document.getElementById("darkmodetoggle").classList.remove("day-bg");
    document.getElementById("darkmodetoggle").classList.add("night-bg");
    // BODY COLOR
    document.getElementById("body").style.backgroundColor = "#1E1E1E";
    // NAV BAR COLORS
    document.getElementById("taskbar-items").style.backgroundColor = "#4B4B4B";
    document.getElementById("taskbar-items").style.color = "#FFF";
    // TASKS
    document.getElementById("tasks").style.backgroundColor = "#4B4B4B"; 
    // TASK ITEMS
    document.getElementById("item1").style.backgroundColor = "#6A6767"; 
    document.getElementById("item2").style.backgroundColor = "#6A6767"; 
    document.getElementById("item3").style.backgroundColor = "#6A6767"; 
    document.getElementById("item1").style.color = "#FFF"; 
    document.getElementById("item2").style.color = "#FFF"; 
    document.getElementById("item3").style.color = "#FFF"; 
}