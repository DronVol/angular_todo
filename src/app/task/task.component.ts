import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input('task') text: string = '';
  @Input('ind') index: number = 0;
  @Output('delete') delete = new EventEmitter<number>();

  check = false;

  constructor() {}

  ngOnInit(): void {}

  handleChange() {
    this.check = !this.check;
  }

  onDelete() {
    this.delete.emit(this.index);
  }
}
