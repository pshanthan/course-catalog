import { Component } from '@angular/core';
import { Course } from '../Models/course';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipePipe } from '../duration-pipe.pipe';
@Component({
  selector: 'app-card',
  imports: [CommonModule, DurationPipePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() course!: Course;
}
