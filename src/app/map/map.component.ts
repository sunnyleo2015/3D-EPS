import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import * as THREE from 'three';
import * as Trackballcontrols from 'three-trackballcontrols';
import { DispatherService } from '../service/dispather.service';
import { MethodService } from '../service/method.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {

  renderer ;
  camera;
  scene;
  light;

  trackBallControls;
  noRotate: boolean = false;
  noZoom: boolean =false;
  noPan: boolean = false;

  clock = new THREE.Clock();
  delta = this.clock.getDelta();
  doRenderFlag = true;

  dispather;
  manager;

  labelList = [];
  labelInfo = [];
  lastTimeLabelsInfo = [];

  readerList:any[] = [];

  message;
  DISPATH_URL:string = 'ws://127.0.0.1:1111';
  MANAGER_URL:string;

  routeSub;

  @ViewChild('MapGL')  mapGL: ElementRef;
  constructor(private router: Router, private route: ActivatedRoute,
              private el: ElementRef, private DS: DispatherService,
              private methodService: MethodService) {

  }

  ngAfterViewInit(){

  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((res) =>{
      this.MANAGER_URL = res.url;
      this.connectManager();
      setTimeout(()=>{this.getLocalizeInfo()}, 100);
    });

    this.connectDispather();
    setTimeout(()=>{this.getLabelInfo()}, 100);

    this.initDraw();

    this.DS.message.subscribe((res)=>{
      this.message = res.data;
      let label = res.data.split(',');
      let update = false;
      _.map(this.labelInfo,(event)=>{
        if (label[1] === event.id){
          event = {id: label[1], x: label[2], y: label[3], z: label[4], status: label[5]};
          update = true;
          return;
        }
      });
      if(!update){
        this.labelInfo.push( {id: label[1], x: label[2], y: label[3], z: label[4], status: label[5]});
      }
    });
  }

  connectDispather(){
    this.dispather = new WebSocket(this.DISPATH_URL);
    this.dispather.onmessage = (res)=>{
      this.DS.message.next(res);
    };
  }

  connectManager(){
    this.manager = new WebSocket(this.MANAGER_URL);
    this.manager.onmessage = (res)=>{
      console.log(res);
    };
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
    this.trackBallControls.rotateSpeed = 3.0;
    this.trackBallControls.zoomSpeed = 1.0;
    this.trackBallControls.panSpeed = 1.0;
  }

  initSphereLabel(label){
    let sphereGeometry = new THREE.SphereGeometry(4,10,10);
    let sphereMaterial = new THREE.MeshBasicMaterial({color: 0xff0000});

    let sphereLabel= new THREE.Mesh(sphereGeometry,sphereMaterial);

    sphereLabel.position.set(label.x,label.y,label.z);
    sphereLabel.name = `label-${label.id}`;

    this.labelList.push(sphereLabel);
    this.scene.add(sphereLabel);
  }

  getLocalizeInfo(){
    this.manager.send("$FILE_READ,1,reader.csv");
    this.manager.onmessage = (res)=>{
      this.readerList = this.methodService.formatDate(res).split(/\n/);
      this.readerList.shift();
      this.readerList.pop();
      console.log(this.readerList);
      this.readerList = _.map(this.readerList, (readerInfo)=>{
        let reader = readerInfo.split(',');
        return {
          id: reader[0],
          name: reader[1],
          ip: reader[2],
          x: reader[3],
          y: reader[4],
          z: reader[5],
          latency: reader[6],
          area: reader[7],
          height: reader[8],
          latencyId: reader[9]
        }
      });
      console.log(this.readerList);
      _.forEach(this.readerList,(reader)=>{
        this.initReader(reader);
      });
    };
  }

  initReader(reader){
    let readerGeometry = new THREE.BoxGeometry(10,10,10);
    let readerMaterial = new THREE.MeshLambertMaterial({color: 0x2196f3});

    let readerLabel = new THREE.Mesh(readerGeometry,readerMaterial);

    readerLabel.name = `reader-${reader.id}`;
    readerLabel.position.set(reader.x,reader.y,reader.z);

    this.scene.add(readerLabel);
  }

  doRender(){
    this.trackBallControls.noZoom  = this.noZoom;
    this.trackBallControls.noRotate = this.noRotate;
    this.trackBallControls.noPan = this.noPan;
    this.trackBallControls.update(this.delta);

    if(this.doRenderFlag){
      _.each(this.labelInfo,(label)=>{
        this.initSphereLabel(label);
      });
    }else {
      _.each(this.lastTimeLabelsInfo,(label)=>{
        this.initSphereLabel(label);
      });
    }
    requestAnimationFrame(()=>{return this.doRender()});
    this.renderer.render(this.scene, this.camera);
    if(this.doRenderFlag){
      _.forEach(this.labelInfo, (label)=>{
        this.scene.remove(this.scene.getObjectByName(`label-${label.id}`));
      });
      this.lastTimeLabelsInfo = this.labelInfo;
      this.labelInfo = [];
      this.labelList = [];
    }else{
      _.forEach(this.lastTimeLabelsInfo, (label)=>{
        this.scene.remove(this.scene.getObjectByName(`label-${label.id}`));
      });
    }
  }

  initDraw(){
    this.initRenderer();
    this.initCamera();
    this.initScene();
    this.initLight();
    this.initFrame();
    this.initTrackBallControls();
    this.doRender();
  }

  getLabelInfo(){
    this.dispather.send('$SUB_ALL');
    this.dispather.send('UPDATE_RAIL');
    this.dispather.send('$UPDATE_GATHER');
    this.dispather.send('$UPDATE_REGION');
    this.dispather.send('$SUB_WARN');
  }

  focusLabel(point){
    this.trackBallControls.target.set(parseFloat(point.x),parseFloat(point.y),parseFloat(point.z));
  }

  resetObservationFace(x,y,z){
    this.camera.position.set(x,y,z);
    this.initTrackBallControls();
  }

  toggleRender(){
    this.doRenderFlag = !this.doRenderFlag;
  }

  clearDispather(){
    this.dispather.onopen=this.dispather.onclose=this.dispather.onerror=this.dispather.onmessage=null;
    this.dispather=null;
  }

  ngOnDestroy(){
    this.routeSub.unsubscribe();
    this.clearDispather();
  }
}
