const lsn = 0.25, wsn = 0.25; 
const shapesnw = new THREE.Shape(); 
shapesnw.moveTo( 0,0 ); 
shapesnw.lineTo( 0, wsn ); 
shapesnw.lineTo( lsn, wsn ); 
shapesnw.lineTo( lsn, 0 ); 
shapesnw.lineTo( 0, 0 ); 
const extrudeSettingsnw = { 	
  steps: 2, 	
  depth: wsn, 	
  bevelEnabled: true, 	
  bevelThickness: 0.25*wsn, 	
  bevelSize: 0.5*wsn, 	
  bevelOffset: 0, 	
  bevelSegments: 1 
}; 

 const geometrysnw = new THREE.ExtrudeGeometry( shapesnw, extrudeSettingsnw ); 
 const materialsnw = new THREE.MeshBasicMaterial( { color: 0xFFFAFA } ); 
 const meshsnw = new THREE.Mesh( geometrysnw, materialsnw ) ;

const particles = [];
function snowsinit() {
for (var i = 0; i < 500; i++) {
var particle = meshsnw.clone();
particle.position.x = (1-2*Math.random())* 600;
particle.position.y = Math.random() * 300;
particle.position.z = (1-2*Math.random()) * 600;
particle.scale.x = particle.scale.y = 1 + Math.random();
scene.add(particle);
particle.rotation.x = Math.random()*3.14;
particle.rotation.y = Math.random()*3.14;
particle.rotation.z = Math.random()*3.14;

particles.push(particle);
}
}

function snowsmove() {
const dl = 0.2; dy=1;
for (var i = 0; i < 500; i++) {
particles[i].position.x += (1-2*Math.random())* dl;
particles[i].position.y -= Math.random() * dy;
particles[i].position.z += (1-2*Math.random())* dl;

 if (particles[i].position.y<0) {
  particles[i].position.y = Math.random() * 300;
 }
}
}



 

