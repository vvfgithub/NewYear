//create a green LineBasicMaterial 		
const linegroup = new THREE.Group();       

const length = 1, width = 1; 
const shapesn = new THREE.Shape(); 
shapesn.moveTo( 0,0 ); 
shapesn.lineTo( 0, width ); 
shapesn.lineTo( length, width ); 
shapesn.lineTo( length, 0 ); 
shapesn.lineTo( 0, 0 ); 
const extrudeSettingsn1 = { 	
  steps: 2, 	
  depth: 1, 	
  bevelEnabled: true, 	
  bevelThickness: 1, 	
  bevelSize: 0.5, 	
  bevelOffset: 0, 	
  bevelSegments: 1 
}; 

 const geometrysn1 = new THREE.ExtrudeGeometry( shapesn, extrudeSettingsn1 ); 
 const materialsn1 = new THREE.MeshBasicMaterial( { color: 0xFFFAFA } ); 
 const meshsn = new THREE.Mesh( geometrysn1, materialsn1 ) ;
 
 meshsn.rotation.z=1.57;
// meshsn.rotation.y=1.57; 
// meshsn.rotation.x= -0.4; 
// meshsn.position.set(1,1,5);
 
 linegroup.add(meshsn);
/*
 meshsn1 = meshsn.clone();
 meshsn1.position.set(-2,-2, 5);
 linegroup.add(meshsn1);
 meshsn2 = meshsn.clone();
 meshsn2.position.set(3, -3, -3);
 linegroup.add(meshsn2);
 meshsn3 = meshsn.clone();
 meshsn3.position.set(3, -7, 3);
 linegroup.add(meshsn3);
*/
const h = 100;
const b = 0.5;
const a = 1;
hc=h*b
 
 const colort = 0x008000;
 const material = new THREE.LineBasicMaterial({ color: colort, linewidth: 3});		
 
 const points = []; 

 const dl = 1;
 for (let i = 0; i < h; i++) {
	     y = i*b;
    	 al=a*i;
    	 if (i<20) {
    	   c=i*0.15;
    	 } else {
  		   c=(h-i)*0.15;
		 }
   x = Math.cos(al)*c;
   z = Math.sin(al)*c;
   len=Math.sqrt(x*x+z*z)*(1-0.3*Math.random());
   l=dl;
   y1=y+dl; y2=y-dl;
   xc=x/c; zc=z/c;
   xi0=0; zi0=0;
   sinal=z/len;
   dx=-z/len; dz=x/len;
   while (l<len) {
     xi=xc*l; zi=zc*l;
     
     points.push( new THREE.Vector3( xi, y1, zi ) );
     points.push( new THREE.Vector3( xi0, y, zi0 ) );
     points.push( new THREE.Vector3( xi, y2, zi ) );
     points.push( new THREE.Vector3( xi0, y, zi0 ) );  
     
     points.push( new THREE.Vector3( xi+dx, y, zi+dz ) );
     points.push( new THREE.Vector3( xi0, y, zi0 ) );
     points.push( new THREE.Vector3( xi-dx, y, zi-dz ) );
     points.push( new THREE.Vector3( xi0, y, zi0 ) );
     points.push( new THREE.Vector3( xi, y, zi ) );
     
     l+=dl;
     xi0=xi; zi0=zi;
   }
   points.push( new THREE.Vector3( 0, y, 0 ) );
 }
 const geometry = new THREE.BufferGeometry().setFromPoints( points );	
 const line = new THREE.Line( geometry, material );
 line.position.set(0, -30, 0);
	   
  function addsphere(geometry, color, x,y,z) {
   const material = new THREE.MeshPhongMaterial({
   			emissive:color, emissiveIntensity:1});
   const sphere = new THREE.Mesh(geometry, material);
   sphere.position.set(x, y, z);
   return sphere;
 }   
 
 const geometrysp = new THREE.SphereBufferGeometry( 1.0, 32, 32 ); 
 const spheres = [
   addsphere(geometrysp, 0x44aa88, 0, 0, 5),
   addsphere(geometrysp, 0x8844aa, 3, 5, 0),
   addsphere(geometrysp, 0xaa8844, -5, -5, -5),
   addsphere(geometrysp, 0xFFFF00, 7, -10, 7),
   addsphere(geometrysp, 0xC0C0C0, -7, -15, 7),
   addsphere(geometrysp, 0x008080, 5, -5, 5),
   addsphere(geometrysp, 0xFF0000, 5, -10, -5),
   addsphere(geometrysp, 0x0000FF, -2, -3, -5),
   addsphere(geometrysp, 0x00FF00, -3, -7, 3),
   
   addsphere(geometrysp, 0x008080, 3, -6, 2),
   addsphere(geometrysp, 0xC0C0C0, -4, -9, 5),
   addsphere(geometrysp, 0x8844aa, 4, -1, 1)   
   ];
  
  linegroup.add(line);
  var grtree2= linegroup.clone();  

    
/*  
  var line2 = line.clone();
  line2.rotation.y = 1.57;   
  linegroup.add(line2);
*/  
  const meshsni = [];
  for (let i = 0; i < 25; i++) {
  var v = meshsn.clone();
  meshsni.push(v);
  y=Math.random()*(hc-26)+20;;
  x = (-1+Math.random()*2)*(hc-y)*0.15;
  z = (-1+Math.random()*2)*(hc-y)*0.15;
  meshsni[i].position.set(x, y-30, z);
  grtree2.add(meshsni[i]);
  }
  
  for (let i = 0; i < spheres.length; i++) 
    linegroup.add(spheres[i]);
  
  const linegroup2=linegroup.clone();
  linegroup2.rotation.y=3.14;
  linegroup.add(linegroup2);
  
 const geometry3 = new THREE.ConeBufferGeometry( 0.3, 50, 32 ); 
 const material3 = new THREE.MeshBasicMaterial( {color: 0x8B4513} ); 
 const cone = new THREE.Mesh( geometry3, material3 ); 
 cone.position.set(0, -5, 0);
// scene.add( cone );
 linegroup.add(cone);
 
 const shape = new THREE.Shape(); 
 al0=Math.PI*2/5; al1=0.5*al0;
 R=2; r=0.7;
 shape.moveTo( 0, R ); 
 for (let i = 1; i < 5; i++) {
		 al=al0*i;
		 alm=al-al1;
		 x=r*Math.sin(alm);
		 y=r*Math.cos(alm);
   shape.lineTo( x,y );
 	 x=R*Math.sin(al);
   y=R*Math.cos(al);
   shape.lineTo( x,y );
 }
 alm=al+al1;
 x=r*Math.sin(alm);
 y=r*Math.cos(alm);
 shape.lineTo( x,y );
 shape.lineTo( 0, R );
 const extrudeSettings = {
 	 steps: 2, 	depth: 0.25,
 	 bevelEnabled: false, 	bevelThickness: 0.1, 	
 	 bevelSize: 1, 	bevelOffset: 0, 	
 	 bevelSegments: 2 
 	 }; 
 const geometrysh = new THREE.ExtrudeBufferGeometry( shape, extrudeSettings ); 
 scolor=0x800000;
//       scolor=0xFF0000;
 const materialsh = new THREE.MeshPhongMaterial( { 
 					emissive:scolor, emissiveIntensity:1 } ); 
 const star = new THREE.Mesh( geometrysh, materialsh ) ; 
//       scene.add( star );       
 star.position.set(0, 20, 0);
linegroup.add( star );        