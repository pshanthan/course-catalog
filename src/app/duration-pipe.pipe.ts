import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationPipe',
})
export class DurationPipePipe implements PipeTransform {
  transform(duration: number): string {
    return String(duration + 'hours');
  }
}
