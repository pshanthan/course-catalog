import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './Models/course';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private httpClient: HttpClient) {}
  apiUrl = 'http://localhost:3000/courses';
  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`${this.apiUrl}`);
  }
  getCourseById(id: number): Observable<Course> {
    return this.httpClient.get<Course>(`${this.apiUrl}/${id}`);
  }
  updateCourse(c: Course): Observable<Course> {
    return this.httpClient.put<Course>(`${this.apiUrl}/${c.id}`, c);
  }
  deleteCourse(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
