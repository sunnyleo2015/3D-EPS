import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ManagerService {
  private url = 'http://localhost:8080';
  private socket =io (this.url);

  constructor() { }

  public on(eventName){
    let observable = new Observable(observer=>{
      this.socket.on(eventName, data => {
        observer.next(data);
      });
      return ()=>{
        this.socket.disconnect()
      }
    });
    return observable;
  }

  public emit(eventName, msg){
    let observable = new Observable(observer=>{
      this.socket.emit(eventName, msg, ()=>{
        observer.next('ok');
      });
    });
    return observable;
  }
}
