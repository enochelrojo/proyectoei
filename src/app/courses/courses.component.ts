import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public cursos = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getCursos().subscribe( datos => {
      this.cursos.push(datos);
      console.log(datos);
    });
  }
}
