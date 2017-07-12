import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ConnectService } from '../../../../service/connect.service'

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Output() connectEngine: EventEmitter<void> = new EventEmitter<void>();

  ip = '127.0.0.1';
  port = '8888';

  constructor(private connectService: ConnectService) { }

  ngOnInit() {

  }

  connect(){
    console.log(`${this.ip}:${this.port}`);
    this.connectService.DISPATH_URL.next(`ws://${this.ip}:${this.port}`);
    this.closeModal();
    this.connectEngine.emit();
  }

  closeModal(){
    this.close.emit();
  }
}
