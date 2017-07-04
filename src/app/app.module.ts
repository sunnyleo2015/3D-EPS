import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing} from './app.route';

import { RebirthNGModule } from 'rebirth-ng';

import { ControlModule } from './control/control.module';
import { MapModule } from './map/map.module'

@NgModule({
  imports: [
    BrowserModule,
    RebirthNGModule.forRoot(),
    routing,
    ControlModule,
    MapModule,
  ],
  exports: [
    ControlModule,
    MapModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
