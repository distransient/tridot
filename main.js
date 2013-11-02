//check for animation prefix
var requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame ||
                            return -1;

3dot = {};
3dot.Dot = {};
3dot.json = function(url) {
  var request = new XMLHttpRequest();
  request.open("Get", url, false);
  request.send(null);
  return this.parse(request.responseText);
}
3dot.parse = function(json) {

};

(function() {
  3dot.update();
  requestAnimationFrame(this);
}() );
