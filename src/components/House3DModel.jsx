import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const House3DModel = ({ 
  width = 400, 
  height = 400, 
  autoRotate = false,
  className = "",
  style = {} 
}) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const houseGroupRef = useRef(null);
  const animationIdRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [dimensions, setDimensions] = useState({ width, height });

  // Handle responsive sizing
  useEffect(() => {
    const updateDimensions = () => {
      if (mountRef.current) {
        const rect = mountRef.current.getBoundingClientRect();
        const newWidth = rect.width || width;
        const newHeight = rect.height || height;
        setDimensions({ width: newWidth, height: newHeight });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [width, height]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f8ff);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      dimensions.width / dimensions.height,
      0.1,
      1000
    );
    camera.position.set(8, 6, 8);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(dimensions.width, dimensions.height);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Create house group
    const houseGroup = new THREE.Group();
    houseGroupRef.current = houseGroup;

    // Materials
    const wallMaterial = new THREE.MeshLambertMaterial({ color: 0xe6d3a3 });
    const roofMaterial = new THREE.MeshLambertMaterial({ color: 0x8b4513 });
    const doorMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
    const windowMaterial = new THREE.MeshLambertMaterial({ color: 0x87ceeb });
    const chimneyMaterial = new THREE.MeshLambertMaterial({ color: 0x8b0000 });

    // House base (walls)
    const houseGeometry = new THREE.BoxGeometry(4, 3, 4);
    const house = new THREE.Mesh(houseGeometry, wallMaterial);
    house.position.y = 1.5;
    house.castShadow = true;
    house.receiveShadow = true;
    houseGroup.add(house);

    // Roof
    const roofGeometry = new THREE.ConeGeometry(3.5, 2, 4);
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 4;
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    houseGroup.add(roof);

    // Door
    const doorGeometry = new THREE.BoxGeometry(0.8, 1.8, 0.1);
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(0, 0.9, 2.05);
    houseGroup.add(door);

    // Door handle
    const handleGeometry = new THREE.SphereGeometry(0.05);
    const handleMaterial = new THREE.MeshLambertMaterial({ color: 0xffd700 });
    const handle = new THREE.Mesh(handleGeometry, handleMaterial);
    handle.position.set(0.3, 0.9, 2.1);
    houseGroup.add(handle);

    // Windows
    const windowGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.1);
    
    // Front windows
    const frontWindow1 = new THREE.Mesh(windowGeometry, windowMaterial);
    frontWindow1.position.set(-1.2, 2, 2.05);
    houseGroup.add(frontWindow1);
    
    const frontWindow2 = new THREE.Mesh(windowGeometry, windowMaterial);
    frontWindow2.position.set(1.2, 2, 2.05);
    houseGroup.add(frontWindow2);

    // Side windows
    const sideWindow1 = new THREE.Mesh(windowGeometry, windowMaterial);
    sideWindow1.position.set(2.05, 2, 0);
    houseGroup.add(sideWindow1);
    
    const sideWindow2 = new THREE.Mesh(windowGeometry, windowMaterial);
    sideWindow2.position.set(-2.05, 2, 0);
    houseGroup.add(sideWindow2);

    // Chimney
    const chimneyGeometry = new THREE.BoxGeometry(0.5, 1.5, 0.5);
    const chimney = new THREE.Mesh(chimneyGeometry, chimneyMaterial);
    chimney.position.set(1.5, 4.5, 1.5);
    chimney.castShadow = true;
    houseGroup.add(chimney);

    // Garden/Ground
    const groundGeometry = new THREE.PlaneGeometry(12, 12);
    const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x90EE90 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    houseGroup.add(ground);

    // Trees
    const createTree = (x, z) => {
      const treeGroup = new THREE.Group();
      
      // Trunk
      const trunkGeometry = new THREE.CylinderGeometry(0.1, 0.15, 1);
      const trunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8b4513 });
      const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
      trunk.position.y = 0.5;
      trunk.castShadow = true;
      treeGroup.add(trunk);
      
      // Leaves
      const leavesGeometry = new THREE.SphereGeometry(0.8);
      const leavesMaterial = new THREE.MeshLambertMaterial({ color: 0x228b22 });
      const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
      leaves.position.y = 1.3;
      leaves.castShadow = true;
      treeGroup.add(leaves);
      
      treeGroup.position.set(x, 0, z);
      return treeGroup;
    };

    houseGroup.add(createTree(-4, -3));
    houseGroup.add(createTree(4, -4));
    houseGroup.add(createTree(-3, 4));

    scene.add(houseGroup);

    // Mouse interaction
    const handleMouseMove = (event) => {
      if (!mountRef.current) return;
      
      const rect = mountRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((event.clientY - rect.top) / rect.height) * 2 + 1
      };
    };

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      if (houseGroupRef.current) {
        if (autoRotate) {
          houseGroupRef.current.rotation.y += 0.005;
        } else {
          // Interactive rotation based on mouse position
          const targetRotationY = mouseRef.current.x * 0.3;
          const targetRotationX = mouseRef.current.y * 0.1;
          
          houseGroupRef.current.rotation.y += (targetRotationY - houseGroupRef.current.rotation.y) * 0.05;
          houseGroupRef.current.rotation.x += (targetRotationX - houseGroupRef.current.rotation.x) * 0.05;
        }
      }

      if (cameraRef.current) {
        cameraRef.current.lookAt(0, 2, 0);
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    // Mount renderer
    mountRef.current.appendChild(renderer.domElement);
    mountRef.current.addEventListener('mousemove', handleMouseMove);

    // Start animation
    animate();
    setIsLoaded(true);

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
        mountRef.current.removeEventListener('mousemove', handleMouseMove);
      }
      
      if (renderer) {
        renderer.dispose();
      }
    };
  }, [dimensions, autoRotate]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = dimensions.width / dimensions.height;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(dimensions.width, dimensions.height);
      }
    };

    handleResize();
  }, [dimensions]);

  return (
    <div 
      className={`relative ${className}`}
      style={style}
    >
      <div
        ref={mountRef}
        className="w-full h-full rounded-lg overflow-hidden"
        style={{ minHeight: '200px' }}
      />
      
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-gray-600 text-sm">Loading 3D Model...</p>
          </div>
        </div>
      )}
      
      <div className="absolute bottom-2 left-2 text-xs text-gray-500 bg-white bg-opacity-80 px-2 py-1 rounded">
        {autoRotate ? 'Auto-rotating' : 'Move mouse to interact'}
      </div>
    </div>
  );
};

export default House3DModel;