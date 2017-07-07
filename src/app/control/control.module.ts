import { NgModule } from '@angular/core';
import { controlRouteModule } from './control.route';

import { ControlComponent } from './control.component';
import { WallComponent } from './wall/wall.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';
import { RebirthNGModule } from 'rebirth-ng';

@NgModule({
  imports: [
    controlRouteModule,
    FormsModule,
    RebirthNGModule
  ],
  declarations: [
    ControlComponent,
    WallComponent,
    LayoutComponent,
  ],
  exports: [
    ControlComponent,
    WallComponent,
    LayoutComponent,
  ]
})
export class ControlModule { }
