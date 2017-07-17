import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MenuBar } from 'rebirth-ng/menu-bar/menu-bar.model';
import { Router, ActivatedRoute } from "@angular/router";
import * as _ from 'lodash';
import { ConnectService } from '../../service/connect.service';
import { SettingService } from '../../service/setting.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {


  connectBtnCss: string = '';
  startEngineCss: string = 'hide';
  closeEngineCss: string = 'hide';

  openConnectModal:boolean = false;

  url: string;

  menu: MenuBar;
  sidebar: MenuBar;

  routeSub;

  constructor(private router: Router,
              private route: ActivatedRoute, private CS: ConnectService,
              private setting: SettingService) { }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((res)=>{
    });
    this.CS.IS_CONNECT.subscribe((res)=>{
      if(res){
        this.showSolid();
      }
      else {
        this.hideSolid();
      }
    });

    this.menu = {
      logo: '../../assets/images/logo.png',
      title: '中电昆辰',
      home: ['./'],
      menus: [
        {
          text: '连接',
          handler: ()=>{
            this.openConnectModal = true;
          },
          cssClass: this.connectBtnCss
        },
        {
          text: '断开',
          handler: ()=>{ console.log('断开')},
          cssClass: this.closeEngineCss
        },
        {
          text: '启动',
          handler: ()=>{
            this.startEngine();
          },
          cssClass: this.startEngineCss
        },
        {
          text: '关闭',
          handler: ()=>{
            console.log('关闭');
          },
          cssClass: this.startEngineCss
        },
      ]
    };

    this.sidebar = {
      menus: [
        {
          text: '视图',
          icon: 'glyphicon glyphicon-eye-open',
          handler:()=>{},
          cssClass: ''
        },
        {
          text: '标签导航',
          icon: 'glyphicon glyphicon-map-marker',
          handler:()=>{},
          cssClass: 'hide'
        },
        {
          text: '房间导航',
          icon: 'glyphicon glyphicon-map-marker',
          handler:()=>{},
          cssClass: 'hide'
        },
        {
          text: '区域导航',
          icon: 'glyphicon glyphicon-map-marker',
          handler:()=>{},
          cssClass: 'hide'
        },
        {
          text: '编队导航',
          icon: 'glyphicon glyphicon-map-marker',
          handler:()=>{},
          cssClass: 'hide'
        },
        {
          text: '基站导航',
          icon: 'glyphicon glyphicon-map-marker',
          handler:()=>{},
          cssClass: 'hide'
        },
        {
          text: '显示设置',
          icon: 'glyphicon glyphicon-cog',
          cssClass: 'hide',
          children: [
            {
              text: '坐标显示',
              icon: 'glyphicon glyphicon-record',
              handler:()=>{}
            },
            {
              text: '标签显示',
              icon: 'glyphicon glyphicon-record',
              handler:()=>{}
            },
            {
              text: '电子围栏显示',
              icon: 'glyphicon glyphicon-record',
              handler:()=>{}
            },
            {
              text: '轨迹显示',
              icon: 'glyphicon glyphicon-record',
              handler:()=>{}
            },
            {
              text: '标签样式',
              icon: 'glyphicon glyphicon-record',
              handler:()=>{}
            },
            {
              text: '基站显示',
              icon: 'glyphicon glyphicon-record',
              handler:()=>{}
            }
          ]
        },
        {
          text: '围墙绘制',
          icon: 'glyphicon glyphicon-edit',
          cssClass: 'hide',
          children: [
            {
              text: '添加围墙',
              icon: 'glyphicon glyphicon-plus-sign',
              handler:()=>{
                this.setting.drawWalls.next(true)
              }
            },
            {
              text: '围墙列表',
              icon: 'glyphicon glyphicon-list-alt',
              handler:()=>{}
            },
          ]
        },
        {
          text: '电子围栏绘制',
          icon: 'glyphicon glyphicon-edit',
          cssClass: 'hide',
          children: [
            {
              text: '添加电子围栏',
              icon: 'glyphicon glyphicon-plus-sign',
              handler:()=>{}
            },
            {
              text: '电子围栏列表',
              icon: 'glyphicon glyphicon-list-alt',
              handler:()=>{}
            },
          ]
        },
        {
          text: '标签时序设置',
          icon: 'glyphicon glyphicon-time',
          handler:()=>{},
          cssClass: 'hide',
        },
        {
          text: '地图配置',
          icon: 'glyphicon glyphicon-globe',
          handler:()=>{},
          cssClass: 'hide',
        },
        {
          text: '查看历史轨迹',
          icon: 'glyphicon glyphicon-facetime-video',
          handler:()=>{},
          cssClass: 'hide',
        },
        {
          text: '基站延时校准',
          icon: 'glyphicon glyphicon-dashboard',
          handler:()=>{},
          cssClass: 'hide',
        },
        {
          text: '实时选站连线',
          icon: 'glyphicon glyphicon-screenshot',
          handler:()=>{},
          cssClass: 'hide',
        },
        {
          text: '系统设置',
          icon: 'glyphicon glyphicon-cog',
          cssClass: 'hide',
          children: [
            {
              text: '房间设置',
              icon: 'glyphicon glyphicon-record',
              handler:()=>{}
            },
            {
              text: '分发器设置',
              icon: 'glyphicon glyphicon-record',
              handler:()=>{}
            },
            {
              text: '引擎设置',
              icon: 'glyphicon glyphicon-record',
              handler:()=>{}
            },
            {
              text: '编队设置',
              icon: 'glyphicon glyphicon-record',
              handler:()=>{}
            },
            {
              text: '标签设置',
              icon: 'glyphicon glyphicon-record',
              handler:()=>{}
            },
            {
              text: '引擎代理设置',
              icon: 'glyphicon glyphicon-record',
              handler:()=>{}
            },
            {
              text: '电子围栏设置',
              icon: 'glyphicon glyphicon-record',
              handler:()=>{}
            },
            {
              text: '基站设置',
              icon: 'glyphicon glyphicon-record',
              handler:()=>{}
            },
            {
              text: '区域设置',
              icon: 'glyphicon glyphicon-record',
              handler:()=>{}
            },
            {
              text: '刚体约束设置',
              icon: 'glyphicon glyphicon-record',
              handler:()=>{}
            },
            {
              text: '系统设置',
              icon: 'glyphicon glyphicon-record',
              handler:()=>{}
            },
            {
              text: '围墙设置',
              icon: 'glyphicon glyphicon-record',
              handler:()=>{}
            }
          ]
        },
        {
          text: '模板参数配置',
          icon: 'glyphicon glyphicon-duplicate',
          handler:()=>{},
          cssClass: 'hide',
        },
        {
          text: '部署向导',
          icon: 'glyphicon glyphicon-book',
          handler:()=>{},
          cssClass: 'hide',
        },
        {
          text: '远程协助',
          icon: 'glyphicon glyphicon-question-sign',
          handler:()=>{},
          cssClass: 'hide',
        },
      ]
    }
  }


  showSolid(){
    _.forEach(this.sidebar.menus, (menu)=>{
      menu.cssClass = '';
    })
  }

  hideSolid(){
    _.forEach(this.sidebar.menus, (menu)=>{
      menu.cssClass = 'hide';
    });
    this.sidebar.menus[0].cssClass = '';
  }

  connectEngine(url){
    this.connectBtnCss = 'hide';
    this.startEngineCss = '';
    this.closeEngineCss = '';
    this.menu.menus[0].cssClass = this.connectBtnCss;
    this.menu.menus[1].cssClass = this.startEngineCss;
    this.menu.menus[2].cssClass = this.closeEngineCss;
    this.url = url;
  }

  startEngine(){
    this.menu.menus[2].cssClass = 'hide';
    this.menu.menus[3].cssClass = '';
    this.CS.connect();
    this.router.navigate(['/control/map',{'url': this.url}]);
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
