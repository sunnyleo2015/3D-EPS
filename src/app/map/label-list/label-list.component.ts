import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.scss']
})
export class LabelListComponent implements OnInit, OnChanges {

  @Input() labelList;
  @Output() focusLabel:  EventEmitter<any> = new EventEmitter<any>();

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
    { name: 'status'},
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
    this.focusLabel.emit({x: e.selected[0].x, y: e.selected[0].y, z: e.selected[0].z,});
    console.log(e.selected[0]);
  }
}
