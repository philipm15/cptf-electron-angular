import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { PurchaseState } from '../core/store/purchase.state';
import { Observable } from 'rxjs';
import { PurchaseModel } from '../core/models/purchase.model';
import { LoadPurchases } from '../core/store/purchase.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  @Select(PurchaseState.purchases) purchases$: Observable<PurchaseModel[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new LoadPurchases()).subscribe(result => console.log('result: ', result));
  }
}
