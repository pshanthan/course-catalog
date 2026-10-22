import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../Models/course';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-list',
  imports: [CommonModule, CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  constructor(private courseService: CourseService) {}
  courses: Course[] | null = null;
  ngOnInit(): void {
    this.getCourses();
  }
  getCourses() {
    this.courseService.getCourses().subscribe((c) => (this.courses = c));
  }
}
