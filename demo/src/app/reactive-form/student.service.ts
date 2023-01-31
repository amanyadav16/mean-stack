import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  addStudent(student:Student){
    const headers = { 'content-type': 'application/json'} 
    const body=JSON.stringify(student)
    return this.http.post('http://localhost:3000/students',body,{'headers':headers})
  }
  getStudents(){
    return this.http.get('http://localhost:3000/students')
  }
  deleteStudent(enrollmentId:string){
    return this.http.delete(`http://localhost:3000/students/${enrollmentId}`)
  }
  updateStudent(student:Student){
    const headers = { 'content-type': 'application/json'} 
    const body=JSON.stringify(student)
    return this.http.put(`http://localhost:3000/students/${student.enrollmentId}`,body,{'headers':headers})
  }
}
