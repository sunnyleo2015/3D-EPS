import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';

import { WebSocketService } from '../service/webSocket.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports:[
    MapComponent,
  ],
  declarations: [MapComponent],
  providers: [
    WebSocketService,
  ]
})
export class MapModule { }
