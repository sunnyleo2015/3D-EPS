import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { DispatherService } from '../service/dispather.service';
import { ConnectService } from '../service/connect.service';
import { AuthStatusService } from '../service/auth-status.service';
import { LabelListComponent } from './label-list/label-list.component';
import { RebirthNGModule } from 'rebirth-ng';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    CommonModule,
    RebirthNGModule,
    NgxDatatableModule,
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
    ConnectService,
    //AuthStatusService,
  ]
})
export class MapModule { }
