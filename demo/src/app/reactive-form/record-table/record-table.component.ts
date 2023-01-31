import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-record-table',
  templateUrl: './record-table.component.html',
  styleUrls: ['./record-table.component.scss']
})
export class RecordTableComponent {

  @Input() dataSource:any;
  @Input() displayedColumns:any;
  @Output() delete:EventEmitter<any>=new EventEmitter();
  @Output() edit:EventEmitter<Student>=new EventEmitter();


  onEdit(student: Student){
    this.edit.emit(student);
  }
  onDelete(enrollmentId:string){
    this.delete.emit(enrollmentId);
  }
}
