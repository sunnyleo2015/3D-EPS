import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { DispatherService } from '../service/dispather.service';
import { ConnectService } from '../service/connect.service';
import { LabelListComponent } from './label-list/label-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports:[
    MapComponent,
    LabelListComponent
  ],
  declarations: [
    MapComponent,
    LabelListComponent
  ],
  providers: [
    DispatherService,
    ConnectService
  ]
})
export class MapModule { }
