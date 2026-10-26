import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Sculpture() {
  const host = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    if (!host.current) return;
    const el = host.current;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); }
    catch { setFailed(true); return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.matchMedia("(pointer: coarse)").matches ? 1.25 : 1.75));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, 1, .1, 100);
    camera.position.z = 9;
    scene.add(new THREE.AmbientLight(0xffffff, 2.2));
    const key = new THREE.DirectionalLight(0xfff0de, 5); key.position.set(-3, 5, 5); scene.add(key);
    const edge = new THREE.PointLight(0xff6600, 65); edge.position.set(4, -1, 3); scene.add(edge);
    const rim = new THREE.DirectionalLight(0xffffff, 3); rim.position.set(2, 2, -4); scene.add(rim);
    const group = new THREE.Group(); scene.add(group);
    const geometry = new THREE.TorusKnotGeometry(1.24, .43, 160, 32, 2, 3);
    const material = new THREE.MeshPhysicalMaterial({color: 0xf26a27, metalness: .46, roughness: .24, clearcoat: 1, clearcoatRoughness: .18});
    const knot = new THREE.Mesh(geometry, material); group.add(knot);
    const orbitGeo = new THREE.TorusGeometry(2.35, .012, 8, 120);
    const orbitMat = new THREE.MeshBasicMaterial({color: 0xa39c8d, transparent: true, opacity: .35});
    const orbit = new THREE.Mesh(orbitGeo, orbitMat); orbit.rotation.set(1.2, .35, -.4); group.add(orbit);
    const moonGeo = new THREE.IcosahedronGeometry(.2, 1);
    const moonMat = new THREE.MeshStandardMaterial({color: 0xe8e4da, metalness: .7, roughness: .22});
    const moon = new THREE.Mesh(moonGeo, moonMat); moon.position.set(2.1, .6, .5); group.add(moon);
    const pointer = { x: 0, y: 0 };
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let visible = false;
    let contextLost = false;
    let elapsed = 0;
    let previous = 0;
    let disposed = false;
    const render = () => renderer.render(scene, camera);
    const animate = (now: number) => {
      frame = 0;
      if (disposed || !visible || document.hidden || contextLost) return;
      const delta = previous ? Math.min((now - previous) / 1000, .05) : 0;
      previous = now;
      elapsed += delta;
      knot.rotation.y = elapsed * .16;
      knot.rotation.z = .35;
      const ease = 1 - Math.exp(-5 * delta);
      group.rotation.y += (pointer.x - group.rotation.y) * ease;
      group.rotation.x += (-pointer.y - group.rotation.x) * ease;
      group.position.y = Math.sin(elapsed * .7) * .12;
      render();
      frame = requestAnimationFrame(animate);
    };
    const syncAnimation = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      previous = 0;
      if (disposed || !visible || document.hidden || contextLost) return;
      if (reduced.matches) {
        knot.rotation.set(0, .35, .35);
        group.rotation.set(0, 0, 0);
        group.position.y = 0;
        render();
      } else frame = requestAnimationFrame(animate);
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || reduced.matches) return;
      const rect = el.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - .5) * .55;
      pointer.y = ((event.clientY - rect.top) / rect.height - .5) * .4;
    };
    const reset = () => { pointer.x = 0; pointer.y = 0; };
    const onLost = (event: Event) => { event.preventDefault(); contextLost = true; syncAnimation(); setFailed(true); };
    const onRestored = () => { contextLost = false; setFailed(false); syncAnimation(); };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', reset);
    renderer.domElement.addEventListener('webglcontextlost', onLost);
    renderer.domElement.addEventListener('webglcontextrestored', onRestored);
    const resize = new ResizeObserver(() => {
      const width = el.clientWidth, height = el.clientHeight;
      if (!width || !height) return;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      // Fit the complete orbit, even in narrow portrait containers.
      const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
      camera.position.z = Math.max(9, 2.85 / (Math.tan(halfFov) * Math.min(camera.aspect, 1)));
      camera.updateProjectionMatrix();
      if (visible && !contextLost) render();
    });
    resize.observe(el);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; syncAnimation(); });
    observer.observe(el);
    reduced.addEventListener('change', syncAnimation);
    document.addEventListener('visibilitychange', syncAnimation);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect(); resize.disconnect();
      reduced.removeEventListener('change', syncAnimation);
      document.removeEventListener('visibilitychange', syncAnimation);
      el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', reset);
      renderer.domElement.removeEventListener('webglcontextlost', onLost);
      renderer.domElement.removeEventListener('webglcontextrestored', onRestored);
      geometry.dispose(); material.dispose(); orbitGeo.dispose(); orbitMat.dispose(); moonGeo.dispose(); moonMat.dispose();
      renderer.dispose(); renderer.domElement.remove();
    };
  }, []);
  return <div className="sculpture" ref={host} role="img" aria-label="Rotating sculptural orange knot with a metallic orbit">{failed && <div className="sculpture-fallback">✳</div>}</div>;
}
