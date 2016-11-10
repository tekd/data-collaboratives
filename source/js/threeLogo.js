var $container = $('#container');
var renderer = new THREE.WebGLRenderer({antialias: true});
var camera = new THREE.PerspectiveCamera(80,1,1,1000);
var scene = new THREE.Scene();

scene.add(camera);
renderer.setSize(300, 300);
$container.append(renderer.domElement);

///////////////////////////////////////////////

// Camera
camera.position.z = 200;

// Material
var pinkMat = new THREE.MeshPhongMaterial({
  color      :  new THREE.Color("rgb(250,237,50)"),
  emissive   :  new THREE.Color("rgb(50,50,50)"),
  specular   :  new THREE.Color("rgb(250,237,50)"),
  shininess  :  80,
  shading    :  THREE.FlatShading,
  transparent: 1,
  opacity    : 1
});

var L1 = new THREE.PointLight( 0xffffff, 1);
L1.position.z = 100;
L1.position.y = 100;
L1.position.x = -150;
scene.add(L1);

var L2 = new THREE.PointLight( 0xffffff, 0.6);
L2.position.z = 100;
L2.position.y = 100;
L2.position.x = 150;
scene.add(L2);

var L3 = new THREE.PointLight( 0xffffff, 0.4);
L3.position.z = 100;
L3.position.y = -150;
L3.position.x = 50;
scene.add(L3);

// IcoSphere -> THREE.IcosahedronGeometry(80, 1) 1-4
var Ico = new THREE.Mesh(new THREE.IcosahedronGeometry(75,0), pinkMat);
Ico.rotation.x = 0;
Ico.rotation.y = 7;
Ico.rotation.z = 2;

scene.add(Ico);

function update(){
  Ico.rotation.x+=2/100;
  Ico.rotation.y+=2/100;
  Ico.rotation.z+=2/100;
}

// Render
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  update();
}

render();
