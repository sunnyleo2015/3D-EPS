import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class SettingService {

  public drawWalls:Subject<boolean> = new Subject<boolean>();

  constructor() { }

}
