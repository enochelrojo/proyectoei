import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
            switchMap(res => from(res['nombre'] as Array<any>)),
            map( x => {
                const u = {
                    nombre: x['nombre']
                };

                return u;
            })
            );
    }
}
