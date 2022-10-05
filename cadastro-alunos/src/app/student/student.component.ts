import { Component, OnInit } from '@angular/core';
import { List } from '../mock-students';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  teste = List;
  
  constructor() { }

  ngOnInit(): void {
  }

}
