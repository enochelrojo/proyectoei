import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

export interface Course {
    nombre: string;
}

@Injectable({
    providedIn: 'root'
})

export class CoursesService {
    constructor(private http: HttpClient) { }

    getCursos(): Observable<any> {
        return this.http.get('http://localhost:3000/cursos').pipe(
            switchMap(res => from(res as Array<any>)),
            map( x => {
                const u = {
                    nombre: x['nombre']
                };

                return u;
            })
        );
    }

    setCurso(course: Course): Observable<any> {
        const headers = {
            headers: new HttpHeaders({ 
                'Access-Control-Allow-Origin': '*', 
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
            })
        };

        return this.http.post('http://localhost:3000/cursos', course, headers).pipe(
            tap((course: Course) => { return course; })            
        );
    }
}
