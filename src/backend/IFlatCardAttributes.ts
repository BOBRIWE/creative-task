import { IFlatCardAddress } from './IFlatCardAddress';

export interface IFlatCardAttributes {
  title: string;
  rooms: number;
  address: IFlatCardAddress;
  area: number;
  unit: string;
}
