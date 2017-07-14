import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reader-list',
  templateUrl: './reader-list.component.html',
  styleUrls: ['./reader-list.component.scss']
})
export class ReaderListComponent implements OnInit {

  @Input() readerList;
  @Output() focusReader:  EventEmitter<any> = new EventEmitter<any>();

  mockLabelList = [
    {id: 1, x: 500, y: 500, z: 300, status: 5},
    {id: 1, x: 400, y: 600, z: 700, status: 5},
    {id: 1, x: 300, y: 200, z: 300, status: 5}
  ];

  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  selections = [];

  columns = [
    { prop: 'id' },
    { name: 'x' },
    { name: 'y' },
    { name: 'z'}
  ];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

  }

  selectLabel(e) {
    this.focusReader.emit({x: e.selected[0].x, y: e.selected[0].y, z: e.selected[0].z,});
    console.log(e.selected[0]);
  }
}
