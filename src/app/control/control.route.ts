import { NgModule } from '@angular/core';
import { Route,RouterModule } from '@angular/router';
import { WallComponent } from './wall/wall.component';
import { ControlComponent } from './control.component';

const routes: Route[] = [
  {
    path: 'control',
    pathMatch: 'full',
    component: ControlComponent,
  },
  {
    path: 'control/wall',
    pathMatch: 'full',
    component: WallComponent,
  }
];

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ],
  providers:[]
})

export class controlRouteModule{}
