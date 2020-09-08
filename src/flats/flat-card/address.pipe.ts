import { Pipe, PipeTransform } from '@angular/core';
import { IFlatCardAddress } from '../../backend/IFlatCardAddress';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(value: IFlatCardAddress): unknown {
    return `г. ${value.city}, ул. ${value.street}, д. ${value.house}, кв. ${value.room}`;
  }

}
