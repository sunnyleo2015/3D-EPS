import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

const MANAGER_URL = 'ws://127.0.0.1:8888';

@Injectable()
export class ManagerService {
  public message: Subject<any>  = new Subject<any>();
  //public ws =  new WebSocket(MANAGER_URL);

  constructor() {

  };
}
