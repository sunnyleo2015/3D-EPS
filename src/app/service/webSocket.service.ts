import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class WebSocketService {
  private socket: Rx.Subject<any>;

  private create(url): Rx.Subject<any>{
    let ws = new WebSocket(url);

    let observable = Rx.Observable.create(
      (obs: Rx.Observer<any>)=>{
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);

        return ws.close.bind(ws);
      }
    );

    let observer = {
      next: (data: Object)=>{
        if(ws.readyState === WebSocket.OPEN){
          ws.send(JSON.stringify(data));
        }
      }
    };

    return Rx.Subject.create(observer, observable);
  }

  constructor() { }

  public connect(url): Rx.Subject<any>{
    if(!this.socket){
      this.socket = this.create(url);
    }
    return this.socket;
  }

}
