import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: string | number): string {
    if (value) {
      return `[${value}]`;
    } else {
      return '';
    }
  }

}
