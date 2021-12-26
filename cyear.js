const groupy = new THREE.Group();       
const groupynew = new THREE.Group();       

     const extrudeSettingsy = { 	
     steps: 2,
     depth: 1, 	
     bevelEnabled: true, 	
     bevelThickness: 1, 	
     bevelSize: 1, 	
     bevelOffset: 0, 	
     bevelSegments: 1 
     }; 
     
w = 3; 
const shape2 = new THREE.Shape(); 
shape2.moveTo( w, -w ); 
     
shape2.lineTo( 1.5*w, -w ); 
shape2.lineTo( 2*w, -1.5*w ); 
     
shape2.lineTo( 2*w, -2.5*w );	     
shape2.lineTo( -0.5*w, -5*w ); 
shape2.lineTo( -0.5*w, -6*w );
shape2.lineTo( 3*w, -6*w );
shape2.lineTo( 3*w, -5*w );
shape2.lineTo( w, -5*w );
shape2.lineTo( 3*w, -3*w );
     
shape2.lineTo( 3*w, -w );
shape2.lineTo( 2*w, 0 );
     
shape2.lineTo( 0.5*w,  0 );
shape2.lineTo( -0.5*w,  -0.5*w );
shape2.lineTo( -0.5*w, -1.5*w );
shape2.lineTo( 0.5*w, -w );

const geometrym2 = new THREE.ExtrudeBufferGeometry( shape2, extrudeSettingsy ); 
const materialmy = new THREE.MeshPhongMaterial({
       emissive:0x00BFFF,
       emissiveIntensity:1});
           
const materialmynew = new THREE.MeshPhongMaterial({      
       emissive: 0x006B3C,
       emissiveIntensity:1});
                    
//const materialmynew = new THREE.MeshBasicMaterial( { color: 0x42AAFF } ); 
                                          
//C0C0C0  //2F4F4F
const mesh2 = new THREE.Mesh( geometrym2, materialmy ) ;	
mesh2.position.set(-4*w, 10, -10);
groupy.add(mesh2);

const mesh2new = new THREE.Mesh( geometrym2, materialmynew ) ;	
mesh2new.position.set(-4*w, 10, -10);
groupynew.add(mesh2new);


const shape0 = new THREE.Shape(); 
shape0.moveTo( w, -w ); 

shape0.lineTo( 1.5*w, -w ); 
shape0.lineTo( 2*w, -1.5*w ); 

shape0.lineTo( 2*w, -4.5*w );	     
shape0.lineTo( 1.5*w, -5*w );	     
shape0.lineTo( w, -5*w );	     
shape0.lineTo( 0.5*w, -4.5*w );	     
shape0.lineTo( 0.5*w, -1.5*w );	     
shape0.lineTo( -0.5*w, -1.5*w );	     
shape0.lineTo( -0.5*w, -5*w );	     
shape0.lineTo( 0.5*w, -6*w );	     
shape0.lineTo( 2*w, -6*w );	     
shape0.lineTo( 3*w, -5*w );	     
shape0.lineTo( 3*w, -w );	     
shape0.lineTo( 2*w, 0 );	     
shape0.lineTo( 0.5*w, 0 );	     
shape0.lineTo( -0.5*w, -w );	     
shape0.lineTo( -0.5*w, -2*w );	     
shape0.lineTo( 0.5*w, -2*w );	     
shape0.lineTo( 0.5*w, -1.5*w );	     
shape0.lineTo( w, -w );
	
const geometrym0 = new THREE.ExtrudeBufferGeometry( shape0, extrudeSettingsy ); 
const mesh0 = new THREE.Mesh( geometrym0, materialmy ) ;	
mesh0.position.set(w, 10, -10);
groupy.add(mesh0);
	
const mesh0new = new THREE.Mesh( geometrym0, materialmynew ) ;	
mesh0new.position.set(w, 10, -10);
groupynew.add(mesh0new);
	
var mesh02 = mesh2.clone();
mesh02.position.set(6*w, 10, -10);
groupy.add(mesh02);

const mesh02new = new THREE.Mesh( geometrym2, materialmynew ) ;	
mesh02new.position.set(6*w, 10, -10);
groupynew.add(mesh02new);


/*
const shape01 = new THREE.Shape(); 
shape01.moveTo( 2*w, 0 ); 		
shape01.lineTo( 2*w, 0 );
shape01.lineTo( 3*w, 0 );
shape01.lineTo( 3*w, -6*w );
shape01.lineTo( 2*w, -6*w );
shape01.lineTo( 2*w, -w );
shape01.lineTo( 0, -2*w );
shape01.lineTo( 0, -w );
 
const geometrym01 = new THREE.ExtrudeBufferGeometry( shape01, extrudeSettingsy ); 
const mesh01 = new THREE.Mesh( geometrym01, materialmy ) ;	
mesh01.position.set(10*w, 10, -10);
groupy.add(mesh01);
*/
var mesh22 = mesh2.clone();
mesh22.position.set(11*w, 10, -10);
groupy.add(mesh22);

const mesh22new = new THREE.Mesh( geometrym2, materialmynew ) ;	
mesh22new.position.set(11*w, 10, -10);
groupynew.add(mesh22new);

groupy.position.set(-10, 20, -30);
groupynew.position.set(-10, 20, -30);

groupynew.visible=false;