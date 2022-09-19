import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { remove } from '../shared/actions/wishlist.actions';
import { Car } from '../shared/dtos/Car';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  constructor(private store: Store<{ wishlist: any[] }>) {
    this.stored$ = this.store.select('wishlist');
    this.stored$.subscribe((stored: any) => this.wishlist = stored.wishlist);
  }

  stored$!: Observable<any>;

  wishlist: Car[] = [];
  
  ngOnInit(): void {
  }


  remove(car: any) {
    this.store.dispatch(remove(car));
  }
}
