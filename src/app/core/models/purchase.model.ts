import { ItemModel } from './item.model';

export class PurchaseModel {
  id: number;
  total: number;
  date: Date;
  tags?: string[];
  description?: string;
  items: ItemModel[];
}
