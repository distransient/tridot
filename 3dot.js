var 3dot = function(display) {

  if(!document.getElementById(display)) {
    console.error("3dot couldn't find the element by id " + display);
    return -1;
  }

  this.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    0;

  if(!this.requestAnimationFrame) {
    console.error("3dot couldn't find a method to request animation frames");
    return -1;
  }
}
