import { Student } from './../student';
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() action!:string;
  @Input() studentForm!:FormGroup;
  @Input() studentModel!:Student;
  @Output() formSubmit:EventEmitter<any>=new EventEmitter();
  years=[
    {value:'2020', viewValue:'2020'},
    {value:'2021', viewValue:'2021'},
    {value:'2022', viewValue:'2022'},
    {value:'2023', viewValue:'2023'},
  ]
  semesterList = [
    { value: '1', viewValue: 'semester 1' },
    { value: '2', viewValue: 'semester 2' },
    { value: '3', viewValue: 'semester 3' },
    { value: '4', viewValue: 'semester 4' },
    { value: '5', viewValue: 'semester 5' },
    { value: '6', viewValue: 'semester 6' },
  ];
  @ViewChild('addForm') addForm!:NgForm;
  
  onSubmit(){
    this.formSubmit.emit(this.addForm);
  }
}
