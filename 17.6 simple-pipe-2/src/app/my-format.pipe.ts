import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFormat'
})
export class MyFormatPipe implements PipeTransform {

  transform(value: number, metric: boolean): string {
    console.log(metric);
    let formatedSize: number;
    let unit: string;

    if (metric) {
      formatedSize = value / 1000;
      unit = 'km';
    } else {
      formatedSize = value / 1609.344;
      unit = 'mi';
    }

    formatedSize = Math.round(formatedSize * 1000) / 1000;
    return formatedSize ? `${formatedSize} ${unit}` : '';
  }

}
