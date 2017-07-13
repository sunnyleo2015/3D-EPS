import { Route,RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MapComponent } from './map/map.component';
import { ControlComponent } from './control/control.component';
import { AuthStatusService } from './service/auth-status.service';

const ROUTER_CONFIG: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: ControlComponent,
  },
  {
    path: 'control',
    component: ControlComponent,
    children: [
      {
        path: 'map',
        pathMatch: 'full',
        canActivate: [AuthStatusService],
        component: MapComponent,
      },
    ]
  }
];


export const routing:ModuleWithProviders = RouterModule.forRoot(ROUTER_CONFIG);
