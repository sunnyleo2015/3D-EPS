import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { DispatherService } from '../service/dispather.service';
import { ConnectService } from '../service/connect.service';
import { LabelListComponent } from './label-list/label-list.component';
import { RebirthNGModule } from 'rebirth-ng';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReaderListComponent } from './reader-list/reader-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RebirthNGModule,
    NgxDatatableModule,
    FormsModule
  ],
  exports:[
    MapComponent,
    LabelListComponent
  ],
  declarations: [
    MapComponent,
    LabelListComponent,
    ReaderListComponent
  ],
  providers: [
    DispatherService,
    ConnectService,
  ]
})
export class MapModule { }
