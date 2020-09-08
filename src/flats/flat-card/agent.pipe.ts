import { Pipe, PipeTransform } from '@angular/core';
import { IFlatCardRelationships } from '../../backend/IFlatCardRelationships';

@Pipe({
  name: 'agent'
})
export class AgentPipe implements PipeTransform {

  transform(value: IFlatCardRelationships): unknown {
    return `${value.attributes.first_name} ${value.attributes.middle_name} ${value.attributes.last_name}`;
  }

}
