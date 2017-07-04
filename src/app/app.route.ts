import { Route,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { MapComponent } from './map/map.component';

const ROUTER_CONFIG: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
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
