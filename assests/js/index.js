(function() {
    var loader;

// function loadNow(opacity) {
//   if (opacity <= 0) {
//       displayContent();
//   } else {
//       loader.style.opacity = opacity;
//       window.setTimeout(function() {
//           loadNow(opacity-0.5);
//       }, 1000);
//   }
// }

function displayContent() {
  loader.style.display = 'none';
  document.getElementById('content').style.display = 'block';
}

// document.addEventListener("DOMContentLoaded", function() {
//   loader = document.getElementById('loader');
//   loadNow(1);
// });
//     $(document).ready(function() {
//   $('.btn-open-menu').click(function () {
//       $('header').addClass('open');
//   });

//   $('.link-menu').click(function () {
//       $('header').removeClass('open');
//   });

//   $('.btn-close-menu').click(function () {
//       $('header').removeClass('open');
//   });
// });


// Set our main variables
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
  targets: '.ml11 .line',
  scaleY: [0,1],
  opacity: [0.5,1],
  easing: "easeOutExpo",
  duration: 900
})
.add({
  targets: '.ml11 .line',
  translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 15],
  easing: "easeOutExpo",
  duration: 1000,
  delay: 200
}).add({
  targets: '.ml11 .letter',
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 800,
  offset: '-=775',
  delay: (el, i) => 34 * (i+1)
}).add({
  targets: '.ml11',
  opacity: 0,
  duration: 1200,
  easing: "easeOutExpo",
  delay: 1200
});














// let scene,  
// renderer,
// camera,
// model,                              // Our character
// neck,                               // Reference to the neck bone in the skeleton
// waist,                               // Reference to the waist bone in the skeleton
// possibleAnims,                      // Animations found in our file
// mixer,                              // THREE.js animations mixer
// idle,                               // Idle, the default state our character returns to
// clock = new THREE.Clock(),          // Used for anims, which run to a clock instead of frame rate 
// currentlyAnimating = false,         // Used to check whether characters neck is being used in another anim
// raycaster = new THREE.Raycaster(),  // Used to detect the click on our character
// loaderAnim = document.getElementById('js-loader');

// //   const MODEL_PATH = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/stacy_lightweight.glb';
// MODEL_PATH = './Xbot.glb'


// init(); 

// function init() {
//   const canvas = document.querySelector('#c');
//   const backgroundColor = 0xf1f1f1;
//   // Scene
//   scene = new THREE.Scene();
//   scene.background = new THREE.Color(backgroundColor);
//   scene.fog = new THREE.Fog(backgroundColor, 60, 100);
  
//   // renderer
//   renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
//   renderer.shadowMap.enabled = true;
//   renderer.setPixelRatio(window.devicePixelRatio);
//   document.body.appendChild(renderer.domElement); 

// // Add a camera
//   camera = new THREE.PerspectiveCamera(
//   50,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
//   );
//   camera.position.z = 30; 
//   camera.position.x = 0;
//   camera.position.y = -3;

//   // let stacy_txt = new THREE.TextureLoader().load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/stacy.jpg');

//   // stacy_txt.flipY = false; // we flip the texture so that its the right way up

//   // const stacy_mtl = new THREE.MeshPhongMaterial({
//   // map: stacy_txt,
//   // color: 0xffffff,
//   // skinning: true
//   // });

//   // Model Load
//   var loader = new THREE.GLTFLoader();
//   loader.load(
//       MODEL_PATH,
//       function(gltf) {
//   // A lot is going to happen here
//           model = gltf.scene;
//           let fileAnimations = gltf.animations;
//           model.scale.set(7, 7, 7);
//           model.position.y = -11;
//           // model.position.x = 10;
//           if (model) model.rotation.y += 9.5;
//           model.traverse(o => {
            
              
//           if (o.isBone && o.name === 'mixamorigNeck') { 
//               neck = o;
//               // console.log(1);
//           }
//           if (o.isBone && o.name === 'mixamorigSpine') { 
//               waist = o;
//               // console.log(1);
//           }
//           if (o.isMesh) {
//               o.castShadow = true;
//               o.receiveShadow = true;
//               // o.material = stacy_mtl;
//           }
//           // const animations = gltf.animations;
          
// });

//   // console.log(neck)
//   scene.add(model);
//   loaderAnim.remove();
//   mixer = new THREE.AnimationMixer(model);
//   let idleAnim = THREE.AnimationClip.findByName(fileAnimations, 'Walk');
//   //  console.log(idleAnim);

//   idleAnim.tracks.splice(21, 3);
//   // console.log(idleAnim.tracks.splice(21, 3));
//   idleAnim.tracks.splice(66, 3);
//   idle = mixer.clipAction(idleAnim);
//   // fileAnimations[0].tracks.splice(15,15);
//   // fileAnimations[0].tracks.splice(21,21);
//   // console.log(idleAnim.tracks);
//   let clips = fileAnimations.filter(val => val.name !== 'idle');
//   possibleAnims = clips.map(val => {
//       let clip = THREE.AnimationClip.findByName(clips, val.name);
//       clip.tracks.splice(3, 3);
//       clip.tracks.splice(9, 3);
//       clip = mixer.clipAction(clip);
//       return clip;
//       }
//       );

  
//   idle.setEffectiveTimeScale(1);
//   idle.play();
 
//   // console.log(mixer);
  
//   },
//   undefined, // We don't need this function
//   function(error) {
//       console.error(error);
//   }
//   );




//   // Add lights
//   let hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
//   hemiLight.position.set(0, 50, 0);
//   // Add hemisphere light to scene
//   scene.add(hemiLight);

//   let d = 8.25;
//   let dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
//   dirLight.position.set(-8, 12, 8);
//   dirLight.castShadow = true;
//   dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
//   dirLight.shadow.camera.near = 0.1;
//   dirLight.shadow.camera.far = 1500;
//   dirLight.shadow.camera.left = d * -1;
//   dirLight.shadow.camera.right = d;
//   dirLight.shadow.camera.top = d;
//   dirLight.shadow.camera.bottom = d * -1;
//   // Add directional Light to scene
//   scene.add(dirLight)

//   const light = new THREE.AmbientLight( 0xff0000 ); // soft white light
//   scene.add( light );

//   // Floor
//   let floorGeometry = new THREE.PlaneGeometry(5000, 5000, 1, 1);
//   let floorMaterial = new THREE.MeshPhongMaterial({
//   color: 0xeeeeee,
//   shininess: 0,
//   });

//   let floor = new THREE.Mesh(floorGeometry, floorMaterial);
//   floor.rotation.x = -0.5 * Math.PI; // This is 90 degrees by the way
//   floor.receiveShadow = true;
//   floor.position.y = -11;
//   scene.add(floor);

//   function update() {
//       if (mixer) {
//           mixer.update(clock.getDelta());
//           }
//       if (resizeRendererToDisplaySize(renderer)) {
//           const canvas = renderer.domElement;
//           camera.aspect = canvas.clientWidth / canvas.clientHeight;
//           camera.updateProjectionMatrix();
//           }       
//       renderer.render(scene, camera);
//       requestAnimationFrame(update);
//       }
//   update();
//   function resizeRendererToDisplaySize(renderer) {
//       const canvas = renderer.domElement;
//       let width = window.innerWidth;
//       let height = window.innerHeight;
//       let canvasPixelWidth = canvas.width / window.devicePixelRatio;
//       let canvasPixelHeight = canvas.height / window.devicePixelRatio;

//       const needResize =
//           canvasPixelWidth !== width || canvasPixelHeight !== height;
//       if (needResize) {
//           renderer.setSize(width, height, false);
//       }
//       return needResize;
//   }
//   let geometry = new THREE.SphereGeometry(8, 32, 32);
//   let material = new THREE.MeshBasicMaterial({ color: 0x9bffaf }); // 0xf2ce2e 
//   let sphere = new THREE.Mesh(geometry, material);
//   sphere.position.z = -15;
//   sphere.position.y = -2.5;
//   sphere.position.x = -0.25;
//   scene.add(sphere);


//   // mouse move
//   document.addEventListener('mousemove', function(e) {
//       // console.log('hello')
      
//       var mousecoords = getMousePos(e);
// if (neck && waist) {
//   //   console.log('Hello');
//     moveJoint(mousecoords, neck, 50);
//     moveJoint(mousecoords, waist, 30);
// }
//   });

//   function getMousePos(e) {
//   return { x: e.clientX, y: e.clientY };
//   }

//   function moveJoint(mouse, joint, degreeLimit) {
// let degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit);
// joint.rotation.y = THREE.Math.degToRad(degrees.x);
// joint.rotation.x = THREE.Math.degToRad(degrees.y);
// }

//   function getMouseDegrees(x, y, degreeLimit) {
// let dx = 0,
//     dy = 0,
//     xdiff,
//     xPercentage,
//     ydiff,
//     yPercentage;

// let w = { x: window.innerWidth, y: window.innerHeight };

// // Left (Rotates neck left between 0 and -degreeLimit)

//  // 1. If cursor is in the left half of screen
// if (x <= w.x / 2) {
//   // 2. Get the difference between middle of screen and cursor position
//   xdiff = w.x / 2 - x;  
//   // 3. Find the percentage of that difference (percentage toward edge of screen)
//   xPercentage = (xdiff / (w.x / 2)) * 100;
//   // 4. Convert that to a percentage of the maximum rotation we allow for the neck
//   dx = ((degreeLimit * xPercentage) / 100) * -1; }
// // Right (Rotates neck right between 0 and degreeLimit)
// if (x >= w.x / 2) {
//   xdiff = x - w.x / 2;
//   xPercentage = (xdiff / (w.x / 2)) * 100;
//   dx = (degreeLimit * xPercentage) / 100;
// }
// // Up (Rotates neck up between 0 and -degreeLimit)
// if (y <= w.y / 2) {
//   ydiff = w.y / 2 - y;
//   yPercentage = (ydiff / (w.y / 2)) * 100;
//   // Note that I cut degreeLimit in half when she looks up
//   dy = (((degreeLimit * 0.5) * yPercentage) / 100) * -1;
//   }

// // Down (Rotates neck down between 0 and degreeLimit)
// if (y >= w.y / 2) {
//   ydiff = y - w.y / 2;
//   yPercentage = (ydiff / (w.y / 2)) * 100;
//   dy = (degreeLimit * yPercentage) / 100;
// }
// return { x: dx, y: dy };
// }








// }
})(); 