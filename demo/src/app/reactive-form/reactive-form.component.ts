import { StudentService } from './student.service';
import { Student } from './student';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  NgForm,
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent {
  displayedColumns: string[] = [
    'enrollmentId',
    'name',
    'gender',
    'year',
    'semester',
    'city',
    'state',
    'action',
  ];
  studentForm!: FormGroup;
  studentModal!: Student;
  deleteId = '';
  action: string = '';
  dataSource: any;

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService
  ) { }

  ngOnInit() {
    this.studentModal = this.resetModel()
    this.studentForm = this.createForm();
    this.loadTableData();
  }

  createForm() {
    return new FormGroup({
      enrollmentId: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z]{2}[0-9]{5}$/),
      ]),
      firstName: new FormControl(null, [
        Validators.required,
        Validators.pattern(/[a-zA-Z ]{3,}/),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.pattern(/[a-zA-Z ]{3,}/),
      ]),
      gender: new FormControl(null, [Validators.required]),
      year: new FormControl(null, [Validators.required]),
      semester: new FormControl(null, [Validators.required]),
      address: new FormGroup({
        //grouping of form controls
        city: new FormControl(null, [
          Validators.required,
          Validators.pattern(/[a-zA-Z ]{3,}/),
        ]),
        state: new FormControl(null, [
          Validators.required,
          Validators.pattern(/[a-zA-Z ]{3,}/),
        ]),
      }),
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

  loadTableData() {
    this.studentService.getStudents().subscribe({
      next: (res) => {
        const tableData: any = res;
        this.dataSource = new MatTableDataSource(tableData);
      },
      error: (err) => {
        console.log(err.message);
      },
      complete: () => {
      },
    });
  }

  onAddRecordClicked() {
    this.action = 'add';
    this.studentModal = this.resetModel()
  }

  onSubmit(formRef: NgForm) {
    if (this.action == 'add') {
      this.studentService.addStudent(this.studentModal).subscribe({
        next: (res) => {
          this.loadTableData();
          formRef.resetForm();
        },
        error: (err) => {
          console.log(err.message);
        },
        complete: () => {
          console.log('data adding completed');
        },
      });
    } else if (this.action == 'edit') {
      this.studentService.updateStudent(this.studentModal).subscribe({
        next: (res) => {
          this.loadTableData();
          formRef.resetForm();
        },
        error: (err) => {
          console.log(err.message);
        },
        complete: () => {
          console.log('data update completed');
        },
      });
    }
  }


  onDelete(enrollmentId: string) {
    this.deleteId = enrollmentId;
  }
  onDeleteConfirm() {
    this.studentService.deleteStudent(this.deleteId).subscribe({
      next: (res) => {
        this.loadTableData();
      },
      error: (err) => {
        console.log(err.message);
      },
      complete: () => {
        console.log('data deletion completed');
      },
    });
  }

  onEdit(student: Student) {
    this.action = 'edit';
    this.studentModal = student;
  }

  resetModel(): Student {
    return {
      enrollmentId: '',
      firstName: '',
      lastName: '',
      gender: '',
      year: '',
      semester: '',
      address: {
        city: '',
        state: '',
      },
    }
  }
}
