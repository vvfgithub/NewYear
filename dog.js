const groupdog = new THREE.Group();       

const shapen = new THREE.Shape(); 

shapen.moveTo( -7, 5 );
shapen.lineTo( -9, 5 );
shapen.lineTo( -9, 4 ); 
shapen.lineTo( -6, 3 ); 

const shapeh = new THREE.Shape(); 
shapeh.moveTo( -1, 3 ); 
shapeh.lineTo( -4, 6 ); 
shapeh.lineTo( -6, 6 ); 

shapeh.lineTo( -7, 5 ); 
shapeh.lineTo( -6, 3 ); 

shapeh.lineTo( -3, -2.7 ); 


const shapeb = new THREE.Shape();
shapeb.moveTo( -2.3, -2 ); 
shapeb.lineTo( -1.3, -3 );
shapeb.lineTo( 5, -2 );
shapeb.lineTo( 8.5, -1 );
shapeb.lineTo( 8, 2 ); 
shapeb.lineTo( -1, 3 ); 


const shapeb2 = new THREE.Shape();
shapeb2.moveTo( 1, 2 ); 
shapeb2.lineTo( 2, 1.5 );
shapeb2.lineTo( 5, 1.5 ); 
shapeb2.lineTo( 7, 2 ); 
shapeb2.lineTo( 7.8, 2.45 ); 

shapeb2.lineTo( 0, 3.245 ); 


const shapet = new THREE.Shape();
shapet.moveTo( 8.8, 2.4 ); 
shapet.lineTo( 8.8, 1 );
shapet.lineTo( 9.8, -1 );
shapet.lineTo( 10.8, -0.5 );
shapet.lineTo( 9.3, 2.0 ); 

const shapetc = new THREE.Shape();
shapetc.moveTo( 8.8, 2.5 ); 
shapetc.lineTo( 8.8, 1.5 );

shapetc.lineTo( 9.8, -1 );
shapetc.lineTo( 10.8, 0 );
shapetc.lineTo( 9.3, 2.3 ); 


const shapet2 = new THREE.Shape();
shapet2.moveTo( 10.8, -0.8 );
shapet2.lineTo( 10.8, -4 ); 
shapet2.lineTo( 9.8, -5 );
shapet2.lineTo( 9.8, -1 );

const shapef1 = new THREE.Shape(); 
shapef1.moveTo( -3, -1 ); 
shapef1.lineTo( -2, -6 ); 
shapef1.lineTo( -1, -6 ); 
shapef1.lineTo( -0.5, -1 );

const shapef2 = new THREE.Shape(); 
shapef2.moveTo( -2., -6 ); 
shapef2.lineTo( -3, -8 ); 
shapef2.lineTo( -3.5, -8 ); 
shapef2.lineTo( -3.5, -8.5 );
shapef2.lineTo( -2, -8.5 );
shapef2.lineTo( -2, -8 );
shapef2.lineTo( -0.9, -6 );

const shapefb1 = new THREE.Shape(); 
shapefb1.moveTo( 8.5, 0 ); 
shapefb1.lineTo( 9, -3 ); 
shapefb1.lineTo( 10, -5 ); 
shapefb1.lineTo( 9, -6 ); 
shapefb1.lineTo( 7, -5 ); 
shapefb1.lineTo( 5, 0 ); 
shapefb1.lineTo( 7, 1 ); 


const shapefb2 = new THREE.Shape(); 
shapefb2.moveTo( 9, -5 );
shapefb2.lineTo( 7, -8 ); 
shapefb2.lineTo( 6, -8 ); 
shapefb2.lineTo( 6, -8.5 ); 
shapefb2.lineTo( 7, -8.5 ); 
shapefb2.lineTo( 10, -5 ); 

const shapey = new THREE.Shape(); 
shapey.moveTo( -4, 6 ); 
shapey.lineTo( -4, 8); 
shapey.lineTo( -5, 6); 

function makeMesh(shape, color, depthv, z) {
  var material = new THREE.MeshBasicMaterial({color});
  var extrudeSettings = {
        steps: 2, 	
        depth: depthv,
        bevelEnabled: true,
        bevelThickness: depthv, 	
        bevelSize: depthv*0.5,
        bevelOffset: 0,
        bevelSegments: 1
        }; 
  var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings ); 
        
  var mesh = new THREE.Mesh(geometry, material);
  groupdog.add(mesh);
  mesh.position.z += z;
  return mesh;
}   
                       
        
function moving(al) 
{
// al2 = alm; 

 groupdog.rotation.y= al;
 dlen= 10*alc;
 if  (meshesl[0].rotation.z>0.4 )
 {
 al2=-alc;
 }	
 if  (meshesl[0].rotation.z<-0.4 )
 {
 al2=alc;
 }	
// console.log(meshesl[0].rotation.z, al2);
 groupdog.position.x-= Math.cos(al)*dlen;
 groupdog.position.z+= Math.sin(al)*dlen;
  
 r=Math.abs(meshesl[0].rotation.z)*0.05;
 grouphead.rotation.z=r;
 
 meshesl[0].rotation.z+= al2;   
 meshesl[1].rotation.z+= al2;   
 meshesr[0].rotation.z-= al2;   
 meshesr[1].rotation.z-= al2;   
 
 meshesl[2].rotation.z-= al2;
 meshesl[3].rotation.z-= al2;

 dy=al2/(Math.PI*0.1)*2; 
 meshesl[2].position.y+= dy; 
 meshesl[3].position.y+= dy;
 meshesr[2].rotation.z+= al2;
 meshesr[3].rotation.z+= al2;
 meshesr[2].position.y-= dy;
 meshesr[3].position.y-= dy;
 
 meshes0[4].rotation.z= 1.5;
 meshes0[4].position.y= -6.5;
 meshes0[4].position.x= 10;

 meshes0[5].rotation.z= 3;
 meshes0[5].position.y= 1;
 meshes0[5].position.x= 21.5;
 
 meshes0[4].rotation.y= -al2*5; 
 meshes0[5].rotation.x= al2*5;
}       
        
function tailmove()                 
{
if  (meshes0[4].rotation.y<-0.2)
{
al2=-alc;
}	
if  (meshes0[4].rotation.y>0.2 )
{
al2=alc;
}	

meshes0[4].rotation.z= 1.5;
meshes0[4].position.y= -6.5;
meshes0[4].position.x= 10;

meshes0[5].rotation.z= 3;
meshes0[5].position.y= 1;
meshes0[5].position.x= 21.5;

meshes0[4].rotation.y-= al2*0.5; 
meshes0[5].rotation.x+= al2*0.5;

}
        
function greetings()
{
groupdog.rotation.z= 0.45;
meshesl[0].rotation.z=-1.5;   
meshesl[1].rotation.z=-1.5; 
meshesl[0].position.y=-3.5; 
meshesl[1].position.y=-3.5; 
meshesl[0].position.x=-1; 
meshesl[1].position.x=-1; 

meshesr[0].rotation.z=-1.5;   
meshesr[1].rotation.z=-1.5; 
meshesr[0].position.y=-3.5; 
meshesr[1].position.y=-3.5; 
meshesr[0].position.x=-1; 
meshesr[1].position.x=-1; 


 
//taildown(); 
meshes0[4].rotation.z = 0;
meshes0[4].position.y = 0;
meshes0[4].position.x = 0;        

meshes0[5].rotation.z= 1.3;
meshes0[5].position.y = -10.5;
meshes0[5].position.x = 6.5;

}  
        
        
function sitdown()                 
{

 groupdog.rotation.z= -0.5;
 grouphead.rotation.z= 0.4;
 grouphead.position.y= 1.0;
 
 meshesl[0].rotation.z=0.5;   
 meshesl[1].rotation.z=0.5; 
 meshesl[0].position.y=-0.5; 
 meshesl[1].position.y=-0.5; 
 
 meshesr[0].rotation.z=0.5;   
 meshesr[1].rotation.z=0.5;
 meshesr[0].position.y=-0.5; 
 meshesr[1].position.y=-0.5;  
 
 meshesl[2].position.y=1.5; 
 meshesl[3].position.y=1.8; 
 meshesl[3].rotation.z=-0.1; 
 
 meshesr[2].position.y=1.5; 
 meshesr[3].position.y=1.8;
 meshesr[3].rotation.z=-0.1;
  
//taildown(); 
meshes0[4].rotation.z = 0;
meshes0[4].position.y = 0;
meshes0[4].position.x = 0;        

meshes0[5].rotation.z= 1.3;
meshes0[5].position.y = -10.5;
meshes0[5].position.x = 6.5;
}
        
function tailup()                 
// хвост вверх
{
meshes0[4].rotation.z= 1.5;
meshes0[4].position.y= -6.5;
meshes0[4].position.x= 10;

meshes0[5].rotation.z= 1.3;
meshes0[5].position.y = -10.5;
meshes0[5].position.x = 6.5;
}
        
function taildown()                 
// хвост вниз
{
meshes0[4].rotation.z = 0;
meshes0[4].position.y = 0;
meshes0[4].position.x = 0;        

meshes0[5].rotation.z = 0;
meshes0[5].position.y = 0;
meshes0[5].position.x = 0;        
}
                
function standup()                 
{
 groupdog.rotation.z= 0;
 grouphead.rotation.z= 0;
 grouphead.position.y= 0;
 
 meshesl[0].rotation.z=0;   
 meshesl[1].rotation.z=0; 
 meshesl[0].position.y=0; 
 meshesl[1].position.y=0; 
 meshesl[0].position.x=0; 
 meshesl[1].position.x=0; 
 
 
 meshesr[0].rotation.z=0;   
 meshesr[1].rotation.z=0;
 meshesr[0].position.y=0; 
 meshesr[1].position.y=0;  
 meshesr[0].position.x=0; 
 meshesr[1].position.x=0;  
 
 meshesl[2].position.y=0; 
 meshesl[2].rotation.z=0; 
 meshesl[3].position.y=0; 
 meshesl[3].rotation.z=0; 
 
 meshesr[2].position.y=0; 
 meshesr[2].rotation.z=0; 
 meshesr[3].position.y=0;
 meshesr[3].rotation.z=0; 

// taildown();
tailmove();
}
        
        
color0 = 0xA47C45
colord = 0xC19A6B
colord2 = 0x654321
colorb = 0x000000

const meshes0 = [
  makeMesh(shapen, colord2, 0.7, 0.35),
  makeMesh(shapeh, color0, 1.0, 0.2),  
  makeMesh(shapeb, color0, 1.5, 0),
  makeMesh(shapeb2, colord2, 1.5, 0),  
  makeMesh(shapet, colord2, 0.5, 0.5),  
  makeMesh(shapet2, colord2, 0.5, 0.5)
];


const meshesl = [
  makeMesh(shapef1, color0, 0.5, 2),
  makeMesh(shapef2, colord, 0.5, 2),
  makeMesh(shapefb1, color0, 0.7, 1.7),
  makeMesh(shapefb2, colord, 0.5, 2),
  makeMesh(shapey, colord2, 0.35, 1.5)
];

function cloneMesh(mesh1, z) {
  var mesh = mesh1.clone();
  mesh.position.z +=z;
  groupdog.add(mesh);
  return mesh;
}
                
const meshesr = [
  cloneMesh(meshesl[0], -3),
  cloneMesh(meshesl[1], -3),
  cloneMesh(meshesl[2], -1.7*1.5),
  cloneMesh(meshesl[3],  -3),
  cloneMesh(meshesl[4], -1.3*1.5)
];
        
const geometrycyl = new THREE.CylinderGeometry( 0.7, 0.7, 0.25, 16 ); 
const materialcyl = new THREE.MeshBasicMaterial( {color: 0x474A51} ); 
const cylinder = new THREE.Mesh( geometrycyl, materialcyl ); 
cylinder.position.set(-9.4, 4.7, 0.7);
cylinder.rotation.z = Math.PI*0.5;

groupdog.add( cylinder );
        
const grouphead = new THREE.Group();       
        
const geometryy = new THREE.CylinderGeometry( 0.3, 0.3, 0.1, 16 ); 
const materialy = new THREE.MeshBasicMaterial( {color: colord2} ); 
const cylindery = new THREE.Mesh( geometryy, materialy ); 
cylindery.position.set(-7.2, 5.3, 1.5);
cylindery.rotation.z = Math.PI*0.5;
cylindery.rotation.y = Math.PI*0.1;
grouphead.add( cylindery );        
        
const cylindery2 = cylindery.clone();
cylindery2.position.z -=1.6;                
cylindery2.rotation.y = -Math.PI*0.1;

grouphead.add( cylinder );        
grouphead.add( cylindery2 );
grouphead.add( meshes0[0] );
grouphead.add( meshes0[1] );
grouphead.add( meshesl[4] );
grouphead.add( meshesr[4] );

groupdog.add( grouphead );
groupdog.position.set(-17, -21, 0);
groupdog.rotation.y=1.8;