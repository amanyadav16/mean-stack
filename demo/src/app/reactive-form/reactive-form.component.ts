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
  tableData: any
  visibleTableData: any;

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

  filterData(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    let filteredData = this.tableData.filter((item: any) => {
      for (let prop in item) {
        if (typeof item[prop] == 'string') {
          if (prop == '_id')
            continue;
          if (item[prop].toLowerCase().includes(filterValue)) {
            return true;
          }
        } else {
          let nestedObject = item[prop];
          for (let nestedProp in nestedObject) {
            if (nestedProp == '_id')
              continue;
            if (nestedObject[nestedProp].toLowerCase().includes(filterValue)) {
              return true;
            }
          }
        }
      }
      return false;
    })
    this.visibleTableData = new MatTableDataSource(filteredData)
  }

  loadTableData() {
    this.studentService.getStudents().subscribe({
      next: (res) => {
        this.tableData = res;
        this.visibleTableData = new MatTableDataSource(this.tableData);
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
