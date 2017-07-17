import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { routing} from './app.route';

import { RebirthNGModule } from 'rebirth-ng';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ControlModule } from './control/control.module';
import { MapModule } from './map/map.module';

import { AuthStatusService } from './service/auth-status.service';
import { MethodService } from './service/method.service';
import { SettingService } from './service/setting.service';

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
  providers: [
    AuthStatusService,
    MethodService,
    SettingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
