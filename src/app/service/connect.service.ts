import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ConnectService {

  public DISPATH_URL: Subject<string> = new Subject<string>();

  constructor() { }



}
