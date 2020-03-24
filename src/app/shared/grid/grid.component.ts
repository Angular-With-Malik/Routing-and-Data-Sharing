import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() records;
  @Output() currentRecordEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendCurrentRecord(record) {
    this.currentRecordEvent.emit(record);
  }
}
