import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function DataCore({ tools }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 0.4, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const particles = [];
    const particleGeometry = new THREE.SphereGeometry(0.045, 16, 16);
    const accentColors = [0x4fe3c1, 0xffc857, 0x7c5cff, 0xf25f5c];

    for (let i = 0; i < 88; i += 1) {
      const radius = 1.35 + Math.random() * 1.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const material = new THREE.MeshBasicMaterial({
        color: accentColors[i % accentColors.length],
        transparent: true,
        opacity: 0.82,
      });
      const particle = new THREE.Mesh(particleGeometry, material);
      particle.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
      particle.userData.seed = Math.random() * Math.PI * 2;
      particles.push(particle);
      group.add(particle);
    }

    const linePositions = [];
    particles.forEach((particle, index) => {
      if (index % 2 === 0 && particles[index + 1]) {
        linePositions.push(
          particle.position.x,
          particle.position.y,
          particle.position.z,
          particles[index + 1].position.x,
          particles[index + 1].position.y,
          particles[index + 1].position.z
        );
      }
    });
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    const lines = new THREE.LineSegments(
      lineGeometry,
      new THREE.LineBasicMaterial({ color: 0x9fb4ff, transparent: true, opacity: 0.18 })
    );
    group.add(lines);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.05, 2),
      new THREE.MeshStandardMaterial({
        color: 0x121827,
        emissive: 0x183c4a,
        roughness: 0.38,
        metalness: 0.28,
        transparent: true,
        opacity: 0.92,
        wireframe: true,
      })
    );
    group.add(core);

    const glow = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.22, 2),
      new THREE.MeshBasicMaterial({
        color: 0x4fe3c1,
        transparent: true,
        opacity: 0.08,
        wireframe: true,
      })
    );
    group.add(glow);

    scene.add(new THREE.AmbientLight(0xffffff, 0.75));
    const light = new THREE.PointLight(0x4fe3c1, 18, 18);
    light.position.set(3, 2, 4);
    scene.add(light);

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = -((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    mount.addEventListener('pointermove', onPointerMove);

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener('resize', resize);

    let frameId = 0;
    const animate = (time) => {
      const t = time * 0.001;
      group.rotation.y = t * 0.16 + pointer.x * 0.22;
      group.rotation.x = Math.sin(t * 0.35) * 0.13 + pointer.y * 0.16;
      core.rotation.x = t * 0.28;
      core.rotation.z = t * 0.18;
      glow.rotation.y = -t * 0.18;

      particles.forEach((particle, index) => {
        const pulse = Math.sin(t * 2 + particle.userData.seed) * 0.09;
        particle.scale.setScalar(1 + pulse + (index % 5 === 0 ? 0.35 : 0));
      });

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      mount.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', resize);
      renderer.dispose();
      particleGeometry.dispose();
      lineGeometry.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="dataCore">
      <div className="canvasShell" ref={mountRef} aria-label="Nucleo 3D interactivo" />
      <div className="orbitLabel top">{tools[0]}</div>
      <div className="orbitLabel right">{tools[1]}</div>
      <div className="orbitLabel bottom">{tools[2]}</div>
    </div>
  );
}
