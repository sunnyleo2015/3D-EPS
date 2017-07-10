import { Component, OnInit, OnDestroy } from '@angular/core';
import { ManagerService } from '../service/manager.service';
import { DispatherService } from '../service/dispather.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit, OnDestroy {

  messages = [];
  connection;
  message;

  constructor(private MS: ManagerService, private DS: DispatherService) { }

  ngOnInit() {
    this.connection = this.MS.on('message').subscribe(res=>{
      console.log(res);
      this.messages.push(res);
    })
  }

  sendMessage(){
    this.MS.emit('add-message',this.message).subscribe(res=>{
      console.log(res);
    });
    this.message = '';
  }

  ngOnDestroy(){
    this.connection.unsubscribe();
  }

}
