var tridot = function (display, options) {

  this.display = document.getElementById(display);
  if (!this.display) {
    console.error("3dot couldn't find the element by id " + display);
    return -1;
  }

  this.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    0;

  if (!this.requestAnimationFrame) {
    console.error("3dot couldn't find a method to request animation frames");
    return -1;
  }

  this.update();
};

/* camera is automatically added to each new scene
 * at the main position and without any angle.
 * I don't have any idea yet what measurement
 * the angles are in radians */
tridot.prototype.camera = {
    position: { x:0, y:0, z:0 }
  , angle: { x:0, y:0, z:0 }
};

tridot.prototype.createObject = function (name, opts) {
  if (typeof name == undefined) {
    console.error('you must pass a name to create an object');
    return -1;
  }
  if (typeof this.objects[name] != undefined) {
    console.error('There is already an object named ' + name + ' defined');
    return -1;
  }
  if (typeof opts == undefined) {
    opts = {};
  }
  opts.position = opts.position || { x:0, y:0, z:0 };
  opts.size = opts.size || 0;
  this.objects[name] = {
      position: opts.position
    , angle: { x:0, y:0, z:0 }
    , size: opts.size
  }
};

tridot.prototype.objects = {};

tridot.prototype.update = function () {
  console.log(this);
};

