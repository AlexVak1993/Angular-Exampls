import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipe',
  // Фильтр будет срабатывать при каждой проверке изменений.
  // Данный подход на больших вычислениях будет проседать по производительности.
  pure: false
})
export class ImpurePipePipe implements PipeTransform {

  transform(value: any): unknown {
    return `${value.firstName} ${value.lastName}`;
  }

}
