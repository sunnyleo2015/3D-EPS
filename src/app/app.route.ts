import { Route,RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MapComponent } from './map/map.component';
import { ControlComponent } from './control/control.component';

const ROUTER_CONFIG: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: ControlComponent,
  },
  {
    path: 'map',
    pathMatch: 'full',
    component: MapComponent,
  },
  {
    path: 'control',
    loadChildren: './control/control.module#ControlModule',
  }
];


export const routing:ModuleWithProviders = RouterModule.forRoot(ROUTER_CONFIG);
