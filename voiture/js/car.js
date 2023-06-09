let scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
let material = new THREE.MeshBasicMaterial({color: 0xff00ff});
let cube = new THREE.Mesh(geometry, material);
cube.position.z = 5;
scene.add(cube);

let geometry1 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
let material1 = new THREE.MeshBasicMaterial({color : 0x00ffff});
let cube1 = new THREE.Mesh(geometry1, material1);
scene.add(cube1);

let vitesse = 0;
let max_vitesse = 0.3;
let friction = 0.07;
let acceleration = 0.15;
let angle = 0;

/*document.addEventListener('keydown', function(event) {
    if(event.keyCode == 38) {
        vitesse += acceleration;
    }
    if(event.keyCode == 40) {
        vitesse -= acceleration;
    }
    if(vitesse > max_vitesse) {
        vitesse = max_vitesse;
    }
    if(vitesse < -max_vitesse/2) {
        vitessz = -max_vitesse/2
    }
    if(vitesse > 0) {
        vitesse -= friction;
    }
    if(vitesse < 0) {
        vitesse += friction;
    }
    if(Math.abs(vitesse) < friction) {
        vitesse = 0;
    }
    if(event.keyCode == 39) {
        angle -= 0.07; 
    }
    if(event.keyCode == 37) {
        angle += 0.07;
    }
    cube.position.x -= Math.sin(angle) * vitesse;
    cube.position.z -= Math.cos(angle) * vitesse;
})*/

var keyboard = new THREEx.KeyboardState();
var clock = new THREE.Clock();

function update()
{
	var delta = clock.getDelta(); // seconds. // 200 pixels per second   // pi/2 radians (90 degrees) per second
	if ( keyboard.pressed("up") ) {
		vitesse += acceleration;}
	if ( keyboard.pressed("down") ){
		vitesse -= acceleration;}

    if(vitesse > max_vitesse) {
        vitesse = max_vitesse;
    }
    if(vitesse < -max_vitesse/2) {
        vitesse = -max_vitesse/2
    }
    if(vitesse > 0) {
        vitesse -= friction;
    }
    if(vitesse < 0) {
        vitesse += friction;
    }
    if(Math.abs(vitesse) < friction) {
        vitesse = 0;
    }
	/*if ( keyboard.pressed("left") )
		cube.position.x -= moveDistance;
	if ( keyboard.pressed("right") )
		cube.position.x += moveDistance;*/
    if ( keyboard.pressed("right") ) {
		angle += 0.07;}
	if ( keyboard.pressed("left") ){
		angle -= 0.07;}

    cube.position.x -= Math.sin(angle) * vitesse;
    cube.position.z -= Math.cos(angle) * vitesse;
}

function animate() {
    requestAnimationFrame(animate);
    /*cube.position.x - (0.5/0.2);
    cube.position.z - (0.5/0.2);*/
    cube.rotation.y = angle;
    //camera.rotation.y = angle;
    update();
    camera.position.x = cube.position.x;
    camera.position.y = cube.position.y + 0.5;
    camera.position.z = cube.position.z + 1.25;
    renderer.render(scene, camera);
};

animate();