function addsphere(geometry, color, x,y,z) {
         const material = new THREE.MeshPhongMaterial({
         			emissive:color, emissiveIntensity:1});
         const sphere = new THREE.Mesh(geometry, material);
//         scene.add(sphere);
          groupsn.add(sphere);
          
          sphere.position.set(x, y, z);
         return sphere;
       }   
xs=-25; zs=-25; ds=0.05;              

const group = new THREE.Group();       
const groupsn = new THREE.Group();       

const geometrysn = new THREE.SphereBufferGeometry( 6.0, 32, 32 ); 
    const spheresn = addsphere(geometrysn, 0x2F4F4F, xs, -22, zs);
    
    const geometrysn2 = new THREE.SphereBufferGeometry( 4.0, 32, 32 ); 
    const spheresn2 = addsphere(geometrysn2, 0x2F4F4F, xs, -14, zs);
    
    const geometrysn3 = new THREE.SphereBufferGeometry( 3, 32, 32 ); 
  //     const spheresn3 = addsphere(geometrysn3, 0x2F4F4F, xs, -8, zs);
    
    const materialsn = new THREE.MeshPhongMaterial({
    emissive:0x2F4F4F, emissiveIntensity:1});            
    const spheresn3 = new THREE.Mesh(geometrysn3, materialsn);          
 //      spheresn3.position.set(xs, -8, zs);
    spheresn3.position.set(0, -8, 0);
    group.add(spheresn3);
    
    const geometrysn4 = new THREE.SphereBufferGeometry( 2, 32, 32 ); 
    
    const spheresn4 = addsphere(geometrysn4, 0x2F4F4F, xs+5, -14+ds, zs);
    const spheresn5 = addsphere(geometrysn4, 0x2F4F4F, xs-5, -14-ds, zs);
    
    const spheresn6 = addsphere(geometrysn4, 0x2F4F4F, xs+5, -26-ds, zs);
    const spheresn7 = addsphere(geometrysn4, 0x2F4F4F, xs-5, -26+ds, zs);

	   const radialSegments=16;
	   const radiusc=0.5;
	   const heightc=3;
	   const geometryc = new THREE.ConeBufferGeometry(radiusc, heightc, radialSegments);
	   
	   const materialc = new THREE.MeshBasicMaterial( {color: 0xFF0000} ); 
	   con = new THREE.Mesh(geometryc, materialc ); 
    con.position.set(0, -7.6, 4); 
	   con.rotation.x = Math.PI*0.45;  
	   group.add(con);
	   
	   const geometryt = new THREE.CylinderBufferGeometry(  1.8, 2.7, 4, 32 ); 
	   const materialt = new THREE.MeshPhongMaterial( {color: 0x808080} ); 
	   const cylindert = new THREE.Mesh( geometryt, materialt );
	   cylindert.position.set(-0.5, -4, -1);
	   cylindert.rotation.x=-0.3;
	   cylindert.rotation.z=0.1;
	   group.add(cylindert);
	   
	   geometrye = new THREE.CircleGeometry( 0.3, 16 );
	   var materiale = new THREE.MeshBasicMaterial( { color:000000} );
	   eyes = new THREE.Mesh(geometrye, materiale ); 
	   eyes.position.set(1.1,-7,3); 
	   group.add(eyes);
	   eyes2 = new THREE.Mesh(geometrye, materiale ); 
	   eyes2.position.set(-1.1,-7,3); 
	   group.add(eyes2);
	   
	   const curve = new THREE.EllipseCurve(	
		   0, 0, // ax, aY 	
		   1.1, 0.7, // xRadius, yRadius 	
		   0, Math.PI, // aStartAngle, aEndAngle 	
		   false, // aClockwise 	
		   0 // aRotation 
		   ); 
	   const pointsm = curve.getPoints( 5 ); 
	   const geometrym = new THREE.BufferGeometry().setFromPoints( pointsm );
	   const materialm = new THREE.LineBasicMaterial( { color : 0x000000, linewidth: 1 } );
	   const mouth = new THREE.Line( geometrym, materialm );	   
	   mouth.rotation.x=Math.PI;
	   mouth.position.set(0, -8.3, 2.9);
	   group.add(mouth);
	   
	   group.position.set(xs, 0, zs);
	groupsn.add(group);
	groupsn.position.y= -1;
