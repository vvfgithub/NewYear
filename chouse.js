const groupv = new THREE.Group();       

v=10; hm=3*v; am=11.4*v; dm=2*v; bm=10.4*v; cm=0.5*bm;
ac=10*v; bc=9*v;
const pointsv = [];

pointsv.push( new THREE.Vector3( 0, 0, 0 ) );
pointsv.push( new THREE.Vector3( am-dm, hm, cm ) );
pointsv.push( new THREE.Vector3( am, 0, 0 ) );

pointsv.push( new THREE.Vector3( 0, 0, 0 ) );
pointsv.push( new THREE.Vector3( dm, hm, cm ) );
pointsv.push( new THREE.Vector3( am-dm, hm, cm ) );

pointsv.push( new THREE.Vector3( 0, 0, bm ) );
pointsv.push( new THREE.Vector3( am, 0, bm ) );
pointsv.push( new THREE.Vector3( am-dm, hm, cm ) );

pointsv.push( new THREE.Vector3( 0, 0, bm ) );
pointsv.push( new THREE.Vector3( am-dm, hm, cm ) );
pointsv.push( new THREE.Vector3( dm, hm, cm ) );

pointsv.push( new THREE.Vector3( 0, 0, bm ) );
pointsv.push( new THREE.Vector3( dm, hm, cm ) );
pointsv.push( new THREE.Vector3( 0, 0, 0 ) );

pointsv.push( new THREE.Vector3( am, 0, 0 ) );
pointsv.push( new THREE.Vector3( am-dm, hm, cm ) );
pointsv.push( new THREE.Vector3( am, 0, bm ) );

const geometryv = new THREE.BufferGeometry().setFromPoints( pointsv );	
//	const materialv = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} ); 
const materialv = new THREE.MeshPhongMaterial({
	emissive:0xFFFFFF, emissiveIntensity:1}); 
const meshv = new THREE.Mesh( geometryv, materialv ); 
meshv.position.set(-5.7*v, 3*v, -bm*0.5);
groupv.add( meshv );

const geometryv2 = new THREE.BoxGeometry( ac, 6*v, bc ); 
const materialv2 = new THREE.MeshPhongMaterial( {color: 0xB22222} ); 
const cubev2 = new THREE.Mesh( geometryv2, materialv2 );
cubev2.position.set(0, 0, 0);
groupv.add( cubev2 );

const geometryv3 = new THREE.BoxGeometry( ac, 0.2*v, 4*v ); 
const materialv3 = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} ); 
const cubev3 = new THREE.Mesh( geometryv3, materialv3 );
cubev3.position.set(0, 0.25*v, 6*v );
cubev3.rotation.x=0.15;
groupv.add( cubev3 );

const geometryv4 = new THREE.BoxGeometry( am-1.4*v, v, 3*v+bm-1.3*v ); 
const materialv4 = new THREE.MeshPhongMaterial( {color: 0xC0C0C0 } ); 
const cubev4 = new THREE.Mesh( geometryv4, materialv4 );
cubev4.position.set(0, -3.5*v, 1.5*v);
groupv.add( cubev4 );

const geometryvs = new THREE.BoxGeometry( 0.25*v, 3*v, 0.25*v ); 
const materialvs = new THREE.MeshPhongMaterial( {color: 0xB22222} ); 
const cubevs = new THREE.Mesh( geometryvs, materialvs );
cubevs.position.set(3*v, -1.5*v, 7.5*v);
groupv.add( cubevs );

var cubevs1 = cubevs.clone();
cubevs1.position.x=-4.5*v;
groupv.add(cubevs1);

var cubevs2 = cubevs.clone();
cubevs2.position.x=4.5*v;
groupv.add(cubevs2);

 var cubevs3 = cubevs.clone();
 cubevs3.position.x=-2.7*v;
 groupv.add(cubevs3);
 
 var cubevs4 = cubevs.clone();
 cubevs4.position.x=-0.7*v;
 groupv.add(cubevs4);
 
 var cubevs5 = cubevs.clone();
 cubevs5.position.x=1.2*v;
 groupv.add(cubevs5);
 
const shapew = new THREE.Shape(); 
shapew.moveTo( 0, 0 ); 
shapew.lineTo( 0.5*v, 0.25*v ); 
shapew.lineTo( v, 0.25*v ); 
shapew.lineTo( 1.5*v, 0 ); 
shapew.lineTo( 1.5*v, -1.4*v ); 
shapew.lineTo( 0., -1.4*v ); 
const geometryw = new THREE.ShapeBufferGeometry( shapew ); 
 
const materialw = new THREE.MeshPhongMaterial({
	emissive:0xFFFF00, emissiveIntensity:1}); 
	
const meshw = new THREE.Mesh( geometryw, materialw ) ; 
meshw.position.set(-3.5*v, 2.5*v, 4.6*v);
groupv.add(meshw);

var meshw2 = meshw.clone();
meshw2.position.set(2*v, 2.5*v, 4.6*v);
groupv.add(meshw2);

var meshw3 = meshw.clone();
meshw3.position.set(-3.5*v, -v, 4.6*v);
groupv.add(meshw3);

var meshw4 = meshw.clone();
meshw4.position.set(2*v, -v, 4.6*v);
groupv.add(meshw4);

var meshw5 = meshw.clone();
meshw5.rotation.y=-Math.PI*0.5;
meshw5.position.x=-5*v;
meshw5.position.z=1*v;
groupv.add(meshw5);

var meshw6 = meshw.clone();
meshw6.rotation.y=-Math.PI*0.5;
meshw6.position.x=-5*v;
meshw6.position.z=-3*v;
groupv.add(meshw6);

var meshw7 = meshw.clone();
meshw7.rotation.y=Math.PI*0.5;
meshw7.position.x=5*v;
meshw7.position.z=-1.5*v;
groupv.add(meshw7);

var meshw8 = meshw.clone();
meshw8.rotation.y=Math.PI*0.5;
meshw8.position.x=5*v;
meshw8.position.z=3*v;
groupv.add(meshw8);

var meshw9 = meshw.clone();
meshw9.rotation.y=Math.PI;
meshw9.position.x=3.5*v;
meshw9.position.z=-4.5*v;
groupv.add(meshw9);

var meshw10 = meshw.clone();
meshw10.rotation.y=Math.PI;
meshw10.position.x=-2*v;
meshw10.position.z=-4.5*v;
groupv.add(meshw10);

const shaped = new THREE.Shape(); 
   shaped.moveTo( 0, 0 ); 
   shaped.lineTo( 1.5*v, 0 );  
   shaped.lineTo( 1.5*v, 2.3*v );
   shaped.lineTo( 0, 2.3*v ); 
const geometryd = new THREE.ShapeBufferGeometry( shaped );
const meshd = new THREE.Mesh( geometryd, materialw ) ; 

meshd.position.set(-v, -2.9*v, 4.6*v);
groupv.add(meshd);

groupv.position.set(10, v, -115);