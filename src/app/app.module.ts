import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing} from './app.route';

import { RebirthNGModule } from 'rebirth-ng';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ControlModule } from './control/control.module';
import { MapModule } from './map/map.module'

@NgModule({
  imports: [
    BrowserModule,
    RebirthNGModule.forRoot(),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    routing,
    ControlModule,
    MapModule,
  ],
  exports: [
    ControlModule,
    MapModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
