import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'area'
})
export class AreaPipe implements PipeTransform {

  transform(value: number, unit: string): unknown {
    return `${value} ${unit}`;
  }

}
