import { Component, EventEmitter, Output } from '@angular/core';
import { Course } from '../Models/course';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipePipe } from '../duration-pipe.pipe';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-card',
  imports: [CommonModule, DurationPipePipe, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() course!: Course;
  @Output() edit = new EventEmitter<Course>();
  @Output() delete = new EventEmitter<number>();
}
