import { Component, OnInit, OnDestroy } from '@angular/core';
import { ManagerService } from '../service/manager.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit, OnDestroy {

  constructor( private MS: ManagerService) { }

  ngOnInit() {

  }

  sendMessage(){

  }

  ngOnDestroy(){

  }

}
