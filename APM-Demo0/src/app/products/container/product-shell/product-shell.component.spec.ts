import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { ProductShellComponent } from './product-shell.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MockComponents } from 'ng-mocks';
import * as fromProduct from '../../state';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductEditComponent } from '../../components/product-edit/product-edit.component';
import * as productActions from '../../state/product.action';
import { Product } from '../../product';
import { TestScheduler } from 'rxjs/testing';

describe('ProductShellComponent', () => {
  let store: MockStore;
  let fixture: ComponentFixture<ProductShellComponent>;
  let component: ProductShellComponent;
  const initialState = { products: {} } as fromProduct.State;
  const product: Product = {
    id: 123,
    productName: 'microphone',
    productCode: 'miPH',
    description: 'some description',
    starRating: 1
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductShellComponent,
        MockComponents(ProductListComponent, ProductEditComponent)
      ],
      providers: [provideMockStore({ initialState })]
    })
      .compileComponents()
      .then(() => {
        store = TestBed.inject(MockStore);
        fixture = TestBed.createComponent(ProductShellComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('Load initial values', () => {
    it('should dispatch Load action when ngOnInit method is called', () => {
      const action = new productActions.Load();
      const spy = jest.spyOn(store, 'dispatch');
      component.ngOnInit();
      expect(spy).toHaveBeenCalledWith(action);
    });

    /*it('should initialize products observable when ngOnInit method is called', () => {
      const expected = cold('(a|)', { a: true });
      const mockGetProductsSelector = store.overrideSelector(
        fromProduct.getProducts,
        []
      );
      TestScheduler.
    });*/
  });

  describe('Products operations', () => {

    it('should dispatch ToggleProductCode action when the check input is changed', () => {
      const payload = true;
      const action = new productActions.ToggleProductCode(payload);
      const spy = jest.spyOn(store, 'dispatch');
      component.checkChanged(payload);
      expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch InitializeCurrentProduct action when a new product is created', () => {
      const action = new productActions.InitializeCurrentProduct();
      const spy = jest.spyOn(store, 'dispatch');
      component.newProduct();
      expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch SetCurrentProduct action when a product is selected', () => {
      const action = new productActions.SetCurrentProduct(product);
      const spy = jest.spyOn(store, 'dispatch');
      component.productSelected(product);
      expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch SetCurrentProduct action when a product is selected', () => {
      const action = new productActions.SetCurrentProduct(product);
      const spy = jest.spyOn(store, 'dispatch');
      component.productSelected(product);
      expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch CreateProduct action when a product is created', () => {
      const action = new productActions.CreateProduct(product);
      const spy = jest.spyOn(store, 'dispatch');
      component.createProduct(product);
      expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch UpdateProduct action when a product is updated', () => {
      const action = new productActions.UpdateProduct(product);
      const spy = jest.spyOn(store, 'dispatch');
      component.updateProduct(product);
      expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch DeleteProduct action when a product is updated', () => {
      const action = new productActions.DeleteProduct(product.id);
      const spy = jest.spyOn(store, 'dispatch');
      component.deleteProduct(product);
      expect(spy).toHaveBeenCalledWith(action);
    });

    it('should dispatch ClearCurrentProduct action when a product is updated', () => {
      const action = new productActions.ClearCurrentProduct();
      const spy = jest.spyOn(store, 'dispatch');
      component.clearProduct();
      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
