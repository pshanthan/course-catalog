import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../Models/course';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [CommonModule, CardComponent, ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  constructor(private courseService: CourseService) {}
  courses: Course[] | null = null;
  editingId: number | null = null;
  courseForm = new FormGroup({
    title: new FormControl('', { validators: Validators.required }),
    instructor: new FormControl('', { validators: Validators.required }),
    startDate: new FormControl('', { validators: Validators.required }),
    duration: new FormControl('', { validators: Validators.required }),
    online: new FormControl(false, { validators: Validators.required }),
  });
  ngOnInit(): void {
    this.getCourses();
  }
  getCourses() {
    this.courseService.getCourses().subscribe((c) => (this.courses = c));
  }
  startEdit(c: Course) {
    this.editingId = c.id ?? null;
    this.courseForm.patchValue({
      title: c.title,
      instructor: c.instructor,
      startDate: c.startDate,
      online: c.online,
      duration: String(c.duration),
    });
  }
  onSubmit() {}
}
