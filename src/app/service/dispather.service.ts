import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';


@Injectable()
export class DispatherService {

  constructor() {

  };

  public message: Subject<any>  = new Subject<any>();


}
