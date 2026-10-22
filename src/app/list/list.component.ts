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
import { Title } from '@angular/platform-browser';

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
    title: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    instructor: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    startDate: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    duration: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    online: new FormControl(false, {
      nonNullable: true,
      validators: Validators.required,
    }),
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
  onSubmit() {
    const raw = this.courseForm.getRawValue();
    if (this.editingId) {
      const course: Course = {
        id: this.editingId,
        title: raw.title,
        instructor: raw.instructor,
        startDate: raw.startDate,
        online: raw.online,
        duration: Number(raw.duration),
      };
      this.courseService.updateCourse(course).subscribe((updated) => {
        this.courses = this.courses?.map((c) =>
          c.id === updated.id ? updated : c,
        );
      });
    }
  }
}
