import { State, Selector, StateContext, Action } from '@ngxs/store';
import { PurchaseModel } from '../models/purchase.model';
import { LoadPurchases } from './purchase.action';
import { Observable, of } from 'rxjs';

const purchases: PurchaseModel[] = [
  {
    id: 1,
    title: 'essentials',
    total: 20,
    date: new Date(),
    tags: ['test', 'test'],
    items: [
      {
        title: 'Äpfel',
        price: 2
      },
      {
        title: 'Parmesan',
        price: 10
      },
      {
        title: 'Bier',
        price: 8
      }
    ]
  },
  {
    id: 2,
    total: 5,
    title: 'essentials',
    date: new Date(),
    items: [
      {
        title: 'Wein',
        price: 4
      },
      {
        title: 'Mozzarella',
        price: 1
      }
    ]
  }
];

export interface PurchaseStateModel {
  purchases: PurchaseModel[];
  error: Error | null;
  loading: boolean;
}

export function getDefaultState() {
  return {
    purchases: [],
    error: null,
    loading: false
  };
}

@State<PurchaseStateModel>({
  name: 'purchaseState',
  defaults: getDefaultState()
})
export class PurchaseState {
  @Selector()
  static purchases(state: PurchaseStateModel): PurchaseModel[] {
    return state.purchases;
  }

  @Action(LoadPurchases, { cancelUncompleted: true }) loadPurchases(
    context: StateContext<PurchaseStateModel>,
    action: LoadPurchases
  ): Observable<PurchaseModel[]> {
    context.patchState({ loading: true, purchases: purchases });
    return of(purchases);
  }
}
