import { NgModule } from '@angular/core';
import { controlRouteModule } from './control.route';

import { ControlComponent } from './control.component';
import { WallComponent } from './wall/wall.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  imports: [
    controlRouteModule,
  ],
  declarations: [
    ControlComponent,
    WallComponent,
    LayoutComponent,
    HeaderComponent,
  ],
  exports: [
    ControlComponent,
    WallComponent,
  ]
})
export class ControlModule { }
