import { Component, EventEmitter, Input, Output, SimpleChange, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../student';

@Component({
  selector: 'app-record-table',
  templateUrl: './record-table.component.html',
  styleUrls: ['./record-table.component.scss']
})
export class RecordTableComponent {
  recordPerPage=6;
  paginationData:any;
  _dataSource:any;
  @Input() set dataSource(value:any){
    this._dataSource=value;
    this.paginationData=new MatTableDataSource(this._dataSource?.filteredData.slice(0,this.recordPerPage))
  };
  @Input() displayedColumns:any;
  @Output() delete:EventEmitter<any>=new EventEmitter();
  @Output() edit:EventEmitter<Student>=new EventEmitter();

  

  onEdit(student: Student){
    this.edit.emit(student);
  }
  onDelete(enrollmentId:string){
    this.delete.emit(enrollmentId);
  }
  onPageChange(page:any){
    this.paginationData=new MatTableDataSource(this._dataSource?.filteredData.slice(this.recordPerPage*page.pageIndex,this.recordPerPage*page.pageIndex+this.recordPerPage))
  }
}
