import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.scss']
})
export class LabelListComponent implements OnInit, OnChanges {

  @Input() labelList;

  loadingIndicator: boolean = true;
  reorderable: boolean = true;

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

}
