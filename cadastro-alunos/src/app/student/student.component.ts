import { Component, OnInit } from '@angular/core';
import { List } from '../mock-students';
import { Student } from '../student';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  teste = List;
  
  selectedStudent?:Student;
  onSelect(x: Student): void{
    this.selectedStudent = x;
  }

  constructor() { }

  ngOnInit(): void {
  }

  

}
