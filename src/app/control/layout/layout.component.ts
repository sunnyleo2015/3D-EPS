import { Component, OnInit } from '@angular/core';
import { MenuBar } from 'rebirth-ng/menu-bar/menu-bar.model';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  menu: MenuBar;
  sidebar: MenuBar;

  constructor() { }

  ngOnInit() {
    this.menu = {
      logo: '../../assets/images/logo.png',
      title: '中电昆辰',
      home: ['./'],
      menus: [
        {
          text: '启动',
          handler: ()=>{ console.log('启动')}
        },
        {
          text: '断开',
          handler: ()=>{ console.log('启动')}
        },

      ]
    };

    this.sidebar = {
      menus: [
        {
          text: '视图',
          icon: 'glyphicon glyphicon-eye-open',
          handler:()=>{}
        },
        {
          text: '标签导航',
          icon: 'glyphicon glyphicon-map-marker',
          handler:()=>{}
        },
        {
          text: '房间导航',
          icon: 'glyphicon glyphicon-map-marker',
          handler:()=>{}
        },
        {
          text: '区域导航',
          icon: 'glyphicon glyphicon-map-marker',
          handler:()=>{}
        },
        {
          text: '编队导航',
          icon: 'glyphicon glyphicon-map-marker',
          handler:()=>{}
        },
        {
          text: '基站导航',
          icon: 'glyphicon glyphicon-map-marker',
          handler:()=>{}
        },
        {
          text: '显示设置',
          icon: 'glyphicon glyphicon-cog',
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
          children: [
            {
              text: '添加围墙',
              icon: 'glyphicon glyphicon-plus-sign',
              handler:()=>{}
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
          handler:()=>{}
        },
        {
          text: '地图配置',
          icon: 'glyphicon glyphicon-globe',
          handler:()=>{}
        },
        {
          text: '查看历史轨迹',
          icon: 'glyphicon glyphicon-facetime-video',
          handler:()=>{}
        },
        {
          text: '基站延时校准',
          icon: 'glyphicon glyphicon-dashboard',
          handler:()=>{}
        },
        {
          text: '实时选站连线',
          icon: 'glyphicon glyphicon-screenshot',
          handler:()=>{}
        },
        {
          text: '系统设置',
          icon: 'glyphicon glyphicon-cog',
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
          handler:()=>{}
        },
        {
          text: '部署向导',
          icon: 'glyphicon glyphicon-book',
          handler:()=>{}
        },
        {
          text: '远程协助',
          icon: 'glyphicon glyphicon-question-sign',
          handler:()=>{}
        },
      ]
    }
  }

}
