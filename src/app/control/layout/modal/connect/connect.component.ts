import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Output() connectEngine: EventEmitter<any> = new EventEmitter<any>();

  ip = '127.0.0.1';
  port = '8888';

  constructor() { }

  ngOnInit() {

  }

  connect(){
    this.closeModal();
    this.connectEngine.emit(`ws://${this.ip}:${this.port}`);
  }

  closeModal(){
    this.close.emit();
  }
}
