import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purePipe',
  // Фильтр будет срабатывать только если входные данные изменились по значению.
  // Помните, что примитивы изменяются по значению, объекты - по ссылке.
  // Данный подход на больших вычислениях будет являться лучшим по производительности.
  pure: true
})
export class PurePipePipe implements PipeTransform {

  transform(value: any): unknown {
    return `${value.firstName} ${value.lastName}`;
  }

}
