import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { DispatherService } from '../service/dispather.service';
import { ConnectService } from '../service/connect.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports:[
    MapComponent,
  ],
  declarations: [MapComponent],
  providers: [
    DispatherService,
    ConnectService
  ]
})
export class MapModule { }
