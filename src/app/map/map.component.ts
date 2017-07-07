import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import * as Trackballcontrols from 'three-trackballcontrols';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  @ViewChild('MapGL')  mapGL: ElementRef;
  constructor(private el:ElementRef) {
    function doRender(){
      this.trackBallControls.update(this.delta);
      this.renderInterval = setInterval(()=>{this.doRender()},1000/120);
      //requestAnimationFrame(a.doRender);
      this.renderer.render(this.scene, this.camera);
    }
  }


  ngAfterViewInit(){
  }

  ngOnInit() {
    this.map();
  }

  map() {
    let renderer;
    let camera;
    let scene;
    let light;
    let trackBallControls;
    let stats;
    let clock = new THREE.Clock();
    let delta = clock.getDelta();
    let labelList = [];
    let labelNameList = [];
    let lookAtMesh;
    let stopRender = false;
    let stopRenderController;
    let renderInterval;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(1000, 800);
    renderer.setClearColor(0xFFFFFF);
    this.mapGL.nativeElement.append(renderer.domElement);

    camera = new THREE.PerspectiveCamera(45, 1000 / 800, 0.1, 100000);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2600;
    camera.up.x = 0;
    camera.up.y = 1;
    camera.up.z = 0;
    camera.lookAt({
      x: 0,
      y: 0,
      z: 0
    });


    scene = new THREE.Scene();


    light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
    light.position.set(2000, 2000, 2000);
    scene.add(light);

    let material = new THREE.LineBasicMaterial({vertexColors: THREE.VertexColors});
    let frame_geometry = new THREE.Geometry();
    let point_color_1 = new THREE.Color(0x999999);
    let point_color_2 = new THREE.Color(0xff0000);
    let point_1 = new THREE.Vector3(-300, 0, 0);
    let point_2 = new THREE.Vector3(1500, 0, 0);

    frame_geometry.vertices.push(point_1);
    frame_geometry.vertices.push(point_2);
    frame_geometry.colors.push(point_color_1, point_color_1);

    for (let i = -30; i < 150; i++) {
      let line = new THREE.Line(frame_geometry, material, THREE.LineSegments);
      line.position.y = i * 10;
      scene.add(line);

      line = new THREE.Line(frame_geometry, material, THREE.LineSegments);
      line.rotation.z = (90 * Math.PI) / 180;
      line.position.x = i * 10;
      scene.add(line)
    }

    let cross_geometryX = new THREE.Geometry();

    cross_geometryX.vertices.push(new THREE.Vector3(-400,0,0));
    cross_geometryX.vertices.push(new THREE.Vector3(1800,0,0));
    cross_geometryX.colors.push(point_color_2,point_color_2);

    let cross_lineX =  new THREE.Line(cross_geometryX,material,THREE.LineSegments );
    cross_lineX.position.y = 0;
    scene.add(cross_lineX);

    let cross_geometryY = new THREE.Geometry();
    cross_geometryY.vertices.push(new THREE.Vector3(-400,0,0));
    cross_geometryY.vertices.push(new THREE.Vector3(1800,0,0));
    cross_geometryY.colors.push(new THREE.Color(0x0a85f3),new THREE.Color(0x0a85f3));

    let cross_lineY =  new THREE.Line(cross_geometryY,material,THREE.LineSegments );
    cross_lineY.rotation.z = (90 * Math.PI)/180;
    cross_lineY.position.x = 0;
    scene.add(cross_lineY);

    let cross_geometryZ = new THREE.Geometry();
    cross_geometryZ.vertices.push(new THREE.Vector3(0,0,-300));
    cross_geometryZ.vertices.push(new THREE.Vector3(0,0,1500));
    cross_geometryZ.colors.push(new THREE.Color(0xf89406),new THREE.Color(0xf89406));
    let cross_lineZ =  new THREE.Line(cross_geometryZ,material,THREE.LineSegments );
    scene.add(cross_lineZ);

    trackBallControls = new Trackballcontrols(camera, renderer.domElement);
    trackBallControls.target.set(0,0,0);
    trackBallControls.rotateSpeed = 2.0;
    trackBallControls.zoomSpeed = 1.0;
    trackBallControls.panSpeed = 1.0;

    function doRender (){
      trackBallControls.update(delta);
      //this.renderInterval = setInterval(()=>{this.doRender()},1000/120);
      requestAnimationFrame(doRender);
      renderer.render(scene, camera);
    }

    doRender();
  }
}
