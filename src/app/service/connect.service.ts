import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConnectService {

  public IS_CONNECT: Subject<boolean> = new Subject<boolean>();
  public DISPATH_URL: Subject<string> = new Subject<string>();

  constructor() { }
  isConnect: boolean = false;

  connect(){
    this.isConnect = true;
    this.IS_CONNECT.next(true);
  }

  disConnect(){
    this.isConnect = false;
    this.IS_CONNECT.next(false);
  }


}
