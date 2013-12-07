THREE.Camera = function () {
  THREE.Object3D.call( this );

  this.matrixWorldInverse = new THREE.Matrix4();
  this.projectionMatrix = new THREE.Matrix4();
  this.projectionMatrixInverse = new THREE.Matrix4();
};

THREE.Camera.prototype = Object.create( THREE.Object3D.prototype );

THREE.Camera.prototype.lookAt = function () {
  var m1 = new THREE.Matrix4();

  return function ( vector ) {
    m1.lookAt( this.position, vector, this.up );
    this.quaternion.setFromRotationMatrix( m1 );
  };
}();

THREE.Camera.prototype.clone = function (camera) {
  if ( camera === undefined ) camera = new THREE.Camera();

  THREE.Object3D.prototype.clone.call( this, camera );
  camera.matrixWorldInverse.copy( this.matrixWorldInverse );
  camera.projectionMatrix.copy( this.projectionMatrix );
  camera.projectionMatrixInverse.copy( this.projectionMatrixInverse );

  return camera;
};


THREE.PerspectiveCamera = function ( fov, aspect, near, far ) {

  THREE.Camera.call( this );

  this.fov = fov !== undefined ? fov : 50;
  this.aspect = aspect !== undefined ? aspect : 1;
  this.near = near !== undefined ? near : 0.1;
  this.far = far !== undefined ? far : 2000;

  this.updateProjectionMatrix();
};

THREE.PerspectiveCamera.prototype = Object.create( THREE.Camera.prototype );
THREE.PerspectiveCamera.prototype.setLens = function ( focalLength, frameHeight ) {
  if ( frameHeight === undefined ) frameHeight = 24;

  this.fov = 2 * THREE.Math.radToDeg( Math.atan( frameHeight / ( focalLength * 2 ) ) );
  this.updateProjectionMatrix();
}

THREE.PerspectiveCamera.prototype.setViewOffset = function ( fullWidth, fullHeight, x, y, width, height ) {
  this.fullWidth = fullWidth;
  this.fullHeight = fullHeight;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  this.updateProjectionMatrix();
};


THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
  if ( this.fullWidth ) {
    var aspect = this.fullWidth / this.fullHeight;
    var top = Math.tan( THREE.Math.degToRad( this.fov * 0.5 ) ) * this.near;
    var bottom = -top;
    var left = aspect * bottom;
    var right = aspect * top;
    var width = Math.abs( right - left );
    var height = Math.abs( top - bottom );

    this.projectionMatrix.makeFrustum(
        left + this.x * width / this.fullWidth,
        left + ( this.x + this.width ) * width / this.fullWidth,
        top - ( this.y + this.height ) * height / this.fullHeight,
        top - this.y * height / this.fullHeight,
        this.near,
        this.far
      );
  } else {
    this.projectionMatrix.makePerspective( this.fov, this.aspect, this.near, this.far );
  }
};

THREE.PerspectiveCamera.prototype.clone = function () {
  var camera = new THREE.PerspectiveCamera();

  THREE.Camera.prototype.clone.call( this, camera );

  camera.fov = this.fov;
  camera.aspect = this.aspect;
  camera.near = this.near;
  camera.far = this.far;

  return camera;
};
