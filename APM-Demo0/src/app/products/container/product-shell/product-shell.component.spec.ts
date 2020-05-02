import { async, TestBed } from '@angular/core/testing';

import { ProductShellComponent } from './product-shell.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import * as fromProduct from '../../state';


describe('ProductShellComponent', () => {
  let store: MockStore;
  const initialState = { products: {} } as fromProduct.State;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductShellComponent ],
      providers: [ provideMockStore({ initialState }) ]
    })
    .compileComponents()
    .then(() => {
      // store = TestBed.inject(MockStore);
    });
  }));

});
