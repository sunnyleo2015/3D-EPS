import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import * as Trackballcontrols from 'three-trackballcontrols';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  renderer ;
  camera;
  scene;
  light;
  trackBallControls;
  stats;
  clock = new THREE.Clock();
  delta = this.clock.getDelta();
  labelList = [];
  labelNameList = [];
  lookAtMesh;
  stopRender = false;
  stopRenderController;
  renderInterval;

  @ViewChild('MapGL')  mapGL: ElementRef;
  constructor(private el:ElementRef) {
  }


  ngAfterViewInit(){

  }

  ngOnInit() {
    this.initRenderer();
    this.initCamera();
    this.initScene();
    this.initLight();
    this.initFrame();
    this.initTrackBallControls();
    this.doRender();
  }


  initRenderer(){
    this.renderer =  new THREE.WebGLRenderer();
    this.renderer.setSize(1000, 800);
    this.renderer.setClearColor(0xFFFFFF);
    this.mapGL.nativeElement.append(this.renderer.domElement);
  }

  initCamera(){
    this.camera = new THREE.PerspectiveCamera(45,1000/800,0.1,100000);
    this.camera.position.x = 0;
    this.camera.position.y = 0;
    this.camera.position.z = 2600;
    this.camera.up.x = 0;
    this.camera.up.y = 1;
    this.camera.up.z = 0;
    this.camera.lookAt({
      x:0,
      y:0,
      z:0
    });
  }

  initScene() {
    this.scene = new THREE.Scene();
  }

  initLight(){
    this.light = new THREE.DirectionalLight(0xFF0000,1.0,0);
    this.light.position.set(2000,2000,2000);
    this.scene.add(this.light);
  }

  initFrame(){
    let material = new THREE.LineBasicMaterial({vertexColors: THREE.VertexColors});
    let frame_geometry = new THREE.Geometry();
    let point_color_1 = new THREE.Color(0x999999);
    let point_color_2 = new THREE.Color(0xff0000);
    let point_1 = new THREE.Vector3(-300,0,0);
    let point_2 = new THREE.Vector3(1500,0,0);

    frame_geometry.vertices.push(point_1);
    frame_geometry.vertices.push(point_2);
    frame_geometry.colors.push(point_color_1,point_color_1);

    for (let i=-30;i<150;i++){
      let line = new THREE.Line(frame_geometry,material,THREE.LineSegments );
      line.position.y = i*10;
      this.scene.add(line);

      line = new THREE.Line(frame_geometry,material,THREE.LineSegments );
      line.rotation.z = (90 * Math.PI)/180;
      line.position.x = i*10;
      this.scene.add(line)
    }


    let cross_geometryX = new THREE.Geometry();

    cross_geometryX.vertices.push(new THREE.Vector3(-400,0,0));
    cross_geometryX.vertices.push(new THREE.Vector3(1800,0,0));
    cross_geometryX.colors.push(point_color_2,point_color_2);

    let cross_lineX =  new THREE.Line(cross_geometryX,material,THREE.LineSegments );
    cross_lineX.position.y = 0;
    this.scene.add(cross_lineX);

    let cross_geometryY = new THREE.Geometry();
    cross_geometryY.vertices.push(new THREE.Vector3(-400,0,0));
    cross_geometryY.vertices.push(new THREE.Vector3(1800,0,0));
    cross_geometryY.colors.push(new THREE.Color(0x0a85f3),new THREE.Color(0x0a85f3));

    let cross_lineY =  new THREE.Line(cross_geometryY,material,THREE.LineSegments );
    cross_lineY.rotation.z = (90 * Math.PI)/180;
    cross_lineY.position.x = 0;
    this.scene.add(cross_lineY);

    let cross_geometryZ = new THREE.Geometry();
    cross_geometryZ.vertices.push(new THREE.Vector3(0,0,-300));
    cross_geometryZ.vertices.push(new THREE.Vector3(0,0,1500));
    cross_geometryZ.colors.push(new THREE.Color(0xf89406),new THREE.Color(0xf89406));
    let cross_lineZ =  new THREE.Line(cross_geometryZ,material,THREE.LineSegments );
    this.scene.add(cross_lineZ);
  }

  initTrackBallControls(){
    this.trackBallControls = new Trackballcontrols(this.camera, this.renderer.domElement);
    this.trackBallControls.target.set(0,0,0);
    this.trackBallControls.rotateSpeed = 1.0;
    this.trackBallControls.zoomSpeed = 1.0;
    this.trackBallControls.panSpeed = 1.0;
  }

  doRender(){
      this.trackBallControls.update(this.delta);
      requestAnimationFrame(()=>{return this.doRender()});
      this.renderer.render(this.scene, this.camera);
  }

}