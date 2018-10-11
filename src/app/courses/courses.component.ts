import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import { Course } from '../course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {
  public cursos = [];

  course = new Course("");

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getCursos().subscribe( datos => {
      this.cursos.push(datos);
    });
  }

  onSubmit() {
    this.coursesService.setCurso(this.course).subscribe(curso => { 
      this.cursos.push(curso);
      this.course = new Course("");
    });
  }
}
