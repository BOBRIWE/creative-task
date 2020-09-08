import { IFlatCardAttributes } from './IFlatCardAttributes';
import { IFlatCardRelationships } from './IFlatCardRelationships';

export interface IFlatCard {
  type: string;
  id: number;
  attributes: IFlatCardAttributes;
  relationships: IFlatCardRelationships;
}
