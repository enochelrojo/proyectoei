import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { TasksComponent } from './app/tasks/tasks.component';
import { CoursesComponent } from './app/courses/courses.component';

const rutas: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'tareas', component: TasksComponent },
  { path: 'cursos', component: CoursesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(rutas) ],
  declarations: [],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
