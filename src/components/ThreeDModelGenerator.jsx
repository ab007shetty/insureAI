import React, { useEffect, useState, useRef } from 'react';
import { Eye, CheckCircle, ArrowLeft, ArrowRight, Home, Maximize2 } from 'lucide-react';
import * as THREE from 'three';

// Beautiful House Model Component
function BeautifulHouseModel({ containerRef }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87CEEB); // Sky blue
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(15, 8, 15);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(20, 20, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;
    scene.add(directionalLight);

    // Additional warm light
    const warmLight = new THREE.DirectionalLight(0xffa500, 0.5);
    warmLight.position.set(-10, 15, 5);
    scene.add(warmLight);

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(50, 50);
    const groundMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x4a5d23,
      transparent: true,
      opacity: 0.8
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Create beautiful house
    const house = new THREE.Group();

    // Materials
    const wallMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xf5f5dc,
      shininess: 30,
      specular: 0x111111
    });
    
    const roofMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x8b4513,
      shininess: 50,
      specular: 0x222222
    });
    
    const windowMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x87ceeb,
      transparent: true,
      opacity: 0.8,
      shininess: 100,
      specular: 0xffffff
    });
    
    const doorMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x654321,
      shininess: 60,
      specular: 0x333333
    });

    const trimMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffffff,
      shininess: 40
    });

    // First floor main structure
    const firstFloorGeometry = new THREE.BoxGeometry(12, 4, 10);
    const firstFloor = new THREE.Mesh(firstFloorGeometry, wallMaterial);
    firstFloor.position.y = 2;
    firstFloor.castShadow = true;
    firstFloor.receiveShadow = true;
    house.add(firstFloor);

    // Second floor main structure
    const secondFloorGeometry = new THREE.BoxGeometry(10, 3.5, 8);
    const secondFloor = new THREE.Mesh(secondFloorGeometry, wallMaterial);
    secondFloor.position.y = 5.75;
    secondFloor.castShadow = true;
    secondFloor.receiveShadow = true;
    house.add(secondFloor);

    // Main roof
    const roofGeometry = new THREE.ConeGeometry(8, 3, 4);
    const mainRoof = new THREE.Mesh(roofGeometry, roofMaterial);
    mainRoof.position.y = 8.5;
    mainRoof.rotation.y = Math.PI / 4;
    mainRoof.castShadow = true;
    house.add(mainRoof);

    // Secondary roof for first floor extension
    const secondaryRoofGeometry = new THREE.ConeGeometry(6, 2, 4);
    const secondaryRoof = new THREE.Mesh(secondaryRoofGeometry, roofMaterial);
    secondaryRoof.position.set(0, 6, 0);
    secondaryRoof.rotation.y = Math.PI / 4;
    secondaryRoof.castShadow = true;
    house.add(secondaryRoof);

    // Chimney
    const chimneyGeometry = new THREE.BoxGeometry(1, 2, 1);
    const chimneyMaterial = new THREE.MeshPhongMaterial({ color: 0x8b4513 });
    const chimney = new THREE.Mesh(chimneyGeometry, chimneyMaterial);
    chimney.position.set(3, 9, 2);
    chimney.castShadow = true;
    house.add(chimney);

    // Front door
    const doorGeometry = new THREE.BoxGeometry(0.1, 3, 1.8);
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(6.05, 1.5, 0);
    house.add(door);

    // Door handle
    const handleGeometry = new THREE.SphereGeometry(0.08);
    const handleMaterial = new THREE.MeshPhongMaterial({ color: 0xffd700, shininess: 100 });
    const handle = new THREE.Mesh(handleGeometry, handleMaterial);
    handle.position.set(6.1, 1.5, 0.5);
    house.add(handle);

    // Windows - First floor
    const windowGeometry = new THREE.BoxGeometry(0.1, 1.5, 2);
    
    // Front windows
    const frontWindow1 = new THREE.Mesh(windowGeometry, windowMaterial);
    frontWindow1.position.set(6.05, 2.5, 3);
    house.add(frontWindow1);
    
    const frontWindow2 = new THREE.Mesh(windowGeometry, windowMaterial);
    frontWindow2.position.set(6.05, 2.5, -3);
    house.add(frontWindow2);

    // Side windows
    const sideWindowGeometry = new THREE.BoxGeometry(2, 1.5, 0.1);
    const sideWindow1 = new THREE.Mesh(sideWindowGeometry, windowMaterial);
    sideWindow1.position.set(3, 2.5, 5.05);
    house.add(sideWindow1);
    
    const sideWindow2 = new THREE.Mesh(sideWindowGeometry, windowMaterial);
    sideWindow2.position.set(-3, 2.5, 5.05);
    house.add(sideWindow2);

    // Second floor windows
    const secondFloorWindow1 = new THREE.Mesh(windowGeometry, windowMaterial);
    secondFloorWindow1.position.set(5.05, 6, 2);
    house.add(secondFloorWindow1);
    
    const secondFloorWindow2 = new THREE.Mesh(windowGeometry, windowMaterial);
    secondFloorWindow2.position.set(5.05, 6, -2);
    house.add(secondFloorWindow2);

    // Window frames
    const frameGeometry = new THREE.BoxGeometry(0.15, 1.8, 2.3);
    const frameMaterial = new THREE.MeshPhongMaterial({ color: 0x654321 });
    
    const frames = [
      { pos: [6.02, 2.5, 3] },
      { pos: [6.02, 2.5, -3] },
      { pos: [5.02, 6, 2] },
      { pos: [5.02, 6, -2] }
    ];
    
    frames.forEach(frame => {
      const windowFrame = new THREE.Mesh(frameGeometry, frameMaterial);
      windowFrame.position.set(...frame.pos);
      house.add(windowFrame);
    });

    // Decorative elements
    // Balcony
    const balconyGeometry = new THREE.BoxGeometry(4, 0.2, 2);
    const balcony = new THREE.Mesh(balconyGeometry, trimMaterial);
    balcony.position.set(6.5, 5, 0);
    balcony.castShadow = true;
    house.add(balcony);

    // Balcony railing
    const railingGeometry = new THREE.BoxGeometry(4, 1, 0.1);
    const railing = new THREE.Mesh(railingGeometry, trimMaterial);
    railing.position.set(6.5, 5.5, 1);
    house.add(railing);

    // Pillars
    const pillarGeometry = new THREE.CylinderGeometry(0.3, 0.3, 4);
    const pillarMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 50 });
    
    const pillar1 = new THREE.Mesh(pillarGeometry, pillarMaterial);
    pillar1.position.set(4, 2, 5.5);
    pillar1.castShadow = true;
    house.add(pillar1);
    
    const pillar2 = new THREE.Mesh(pillarGeometry, pillarMaterial);
    pillar2.position.set(-4, 2, 5.5);
    pillar2.castShadow = true;
    house.add(pillar2);

    // Garden elements
    // Trees
    const treeGeometry = new THREE.CylinderGeometry(0.5, 0.5, 4);
    const treeMaterial = new THREE.MeshPhongMaterial({ color: 0x8b4513 });
    const leavesGeometry = new THREE.SphereGeometry(2);
    const leavesMaterial = new THREE.MeshPhongMaterial({ color: 0x228b22 });
    
    for (let i = 0; i < 3; i++) {
      const tree = new THREE.Group();
      const trunk = new THREE.Mesh(treeGeometry, treeMaterial);
      trunk.position.y = 2;
      trunk.castShadow = true;
      tree.add(trunk);
      
      const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
      leaves.position.y = 5;
      leaves.castShadow = true;
      tree.add(leaves);
      
      const positions = [
        [15, 0, 10],
        [-15, 0, 15],
        [20, 0, -10]
      ];
      
      tree.position.set(...positions[i]);
      scene.add(tree);
    }

    // Pathway
    const pathGeometry = new THREE.BoxGeometry(3, 0.1, 20);
    const pathMaterial = new THREE.MeshPhongMaterial({ color: 0x708090 });
    const path = new THREE.Mesh(pathGeometry, pathMaterial);
    path.position.set(8, 0.05, 0);
    path.receiveShadow = true;
    scene.add(path);

    scene.add(house);

    // Controls
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event) => {
      if (event.buttons === 1) { // Left mouse button
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        targetRotationY = mouseX * Math.PI;
        targetRotationX = mouseY * Math.PI * 0.5;
      }
    };

    const handleWheel = (event) => {
      camera.position.multiplyScalar(1 + event.deltaY * 0.001);
      camera.position.clampLength(5, 50);
    };

    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('wheel', handleWheel);

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      // Smooth rotation
      house.rotation.y += (targetRotationY - house.rotation.y) * 0.02;
      house.rotation.x += (targetRotationX - house.rotation.x) * 0.02;
      
      // Auto-rotation when not interacting
      if (!mouseX && !mouseY) {
        house.rotation.y += 0.002;
      }
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (mountRef.current && renderer && camera) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer) {
        mountRef.current.removeChild(renderer.domElement);
      }
      if (renderer) {
        renderer.dispose();
      }
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
}

export default function ThreeDModelGenerator({ images, onComplete, onBack }) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('analyzing');
  const [isComplete, setIsComplete] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  const steps = [
    { key: 'analyzing', label: 'Analyzing uploaded photos', duration: 1300 },
    { key: 'processing', label: 'Processing architectural structure', duration: 1100 },
    { key: 'generating', label: 'Generating detailed 3D model', duration: 1200 },
    { key: 'rendering', label: 'Applying realistic textures', duration: 900 },
    { key: 'complete', label: 'Beautiful model ready!', duration: 500 }
  ];

  useEffect(() => {
    let stepIndex = 0;
    let progressInterval;
    
    function processSteps() {
      const step = steps[stepIndex];
      setCurrentStep(step.key);
      let stepProgress = 0;
      
      progressInterval = setInterval(() => {
        stepProgress += 2;
        const baseProgress = (stepIndex / steps.length) * 100;
        const stepProgressPercent = (stepProgress / 100) * (100 / steps.length);
        setProgress(Math.min(baseProgress + stepProgressPercent, 100));
        
        if (stepProgress >= 100) {
          clearInterval(progressInterval);
          stepIndex++;
          if (stepIndex < steps.length) {
            setTimeout(processSteps, 300);
          } else {
            setIsComplete(true);
          }
        }
      }, step.duration / 50);
    }
    
    processSteps();
    return () => clearInterval(progressInterval);
  }, []);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="h-20 w-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <Home className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-3 -right-3 h-8 w-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                  <Eye className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              3D Model Generator
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              Creating a beautiful, detailed model of your property
            </p>
          </div>

          <div className="space-y-8">
            {/* 3D Model Viewer */}
            <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : ''}`}>
              <div className={`${isFullscreen ? 'w-full h-full' : 'w-full h-[500px]'} bg-gradient-to-br from-sky-100 to-blue-200 rounded-xl overflow-hidden shadow-inner border-2 border-white/50`}>
                <BeautifulHouseModel containerRef={containerRef} />
                
                {/* Fullscreen toggle */}
                <button
                  onClick={toggleFullscreen}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 p-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
                >
                  <Maximize2 className="h-5 w-5" />
                </button>
                
                {/* Controls hint */}
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
                  🖱️ Click & drag to rotate • 🔄 Scroll to zoom
                </div>
              </div>
            </div>

            {/* Progress Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200/50 rounded-xl p-6 shadow-inner">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div className={`h-4 w-4 rounded-full transition-all duration-300 ${
                    isComplete ? 'bg-emerald-500' : 'bg-blue-500 animate-pulse'
                  }`} />
                  {!isComplete && (
                    <div className="absolute inset-0 h-4 w-4 bg-blue-500 rounded-full animate-ping opacity-20" />
                  )}
                </div>
                <span className="text-blue-800 font-semibold text-lg">
                  {steps.find(s => s.key === currentStep)?.label || 'Processing...'}
                </span>
              </div>
              
              <div className="w-full bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full h-3 mb-4 shadow-inner">
                <div
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-500 shadow-sm relative overflow-hidden"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm text-blue-700 font-medium">
                  {Math.round(progress)}% Complete
                </div>
                <div className="text-xs text-blue-600">
                  {images?.length || 0} photos processed
                </div>
              </div>
            </div>

            {/* Completion Message */}
            {isComplete && (
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200/50 rounded-xl p-6 text-center shadow-inner">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                  <span className="text-emerald-800 font-bold text-xl">
                    Stunning 3D Model Generated!
                  </span>
                </div>
                <p className="text-emerald-700 mb-4">
                  Your property has been transformed into a beautiful, interactive 3D model with realistic textures and lighting.
                </p>
                <div className="flex justify-center space-x-4 text-sm text-emerald-600">
                  <span>✨ Realistic materials</span>
                  <span>🏠 Detailed architecture</span>
                  <span>🌳 Environmental elements</span>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between pt-8">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 px-8 py-4 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Photos</span>
            </button>
            
            <button
              onClick={onComplete}
              disabled={!isComplete}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 font-medium"
            >
              <span>Continue to Documents</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}