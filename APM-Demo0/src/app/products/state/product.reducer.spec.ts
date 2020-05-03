import { Product } from '../product';
import * as productActions from '../state/product.action';
import { initialState, reducer, ProductState } from './product.reducer';

describe('Product reducer', () => {
  const product: Product = {
    id: 123,
    productName: 'microphone',
    productCode: 'miPH',
    description: 'some description',
    starRating: 1
  };

  const products: Product[] = [ product ];
  const stateWithProducts = { ... initialState, products };

  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = ({ type: 'something undefined' }) as any;
      const productState = reducer(initialState, action);
      expect(productState).toEqual(initialState);
    });
  });

  describe('[Product] Toggle Product Code', () => {
    it('should toggle product code to false in state', () => {
      const toggleProductCode = false;
      const action = new productActions.ToggleProductCode(toggleProductCode);
      const productState = reducer(initialState, action);
      expect(productState).toEqual({
        ...initialState,
        showProductCode: false
      } as ProductState);
    });
  });

  describe('[Product] Set Current Product', () => {
    it('should set current product state', ( ) => {
      const action = new productActions.SetCurrentProduct(product);
      const productState = reducer(initialState, action);
      expect(productState).toEqual({
        ...initialState,
        currentProductId: product.id
      } as ProductState);
    });
  });

  describe('[Product] Clear Current Product', () => {
    it('should clear product state', ( ) => {
      const action = new productActions.ClearCurrentProduct();
      const productState = reducer(initialState, action);
      expect(productState).toEqual({
        ...initialState,
        currentProductId: null
      } as ProductState);
    });
  });

  describe('[Product] Initialize Current Product', () => {
    it('should initialize current product state', ( ) => {
      const action = new productActions.InitializeCurrentProduct();
      const productState = reducer(initialState, action);
      expect(productState).toEqual({
        ...initialState,
        currentProductId: 0
      } as ProductState);
    });
  });

  describe('[Product] Load Success', () => {
    it('should load products successfully in state', ( ) => {
      const action = new productActions.LoadSuccess(products);
      const productState = reducer(initialState, action);
      expect(productState).toEqual({
        ...initialState,
        products,
        error: ''
      } as ProductState);
    });
  });

  describe('[Product] Load Fail', () => {
    it('should fail loading products in state', ( ) => {
      const error = 'loading products fail';
      const action = new productActions.LoadFail(error);
      const productState = reducer(initialState, action);
      expect(productState).toEqual({
        ...initialState,
        products: [],
        error
      } as ProductState);
    });
  });

  describe('[Product] Update Product Success', () => {
    it('should update a product successfully in state', ( ) => {
      const action = new productActions.UpdateProductSuccess(product);
      const productState = reducer(stateWithProducts, action);
      expect(productState).toEqual({
        ...stateWithProducts,
        currentProductId: product.id,
        products,
        error: ''
      } as ProductState);
    });
  });

  describe('[Product] Update Product Fail', () => {
    it('should fail updating a product in state', ( ) => {
      const error = 'Updating product fail';
      const action = new productActions.UpdateProductFail(error);
      const productState = reducer(stateWithProducts, action);
      expect(productState).toEqual({
        ...stateWithProducts,
        error
      });
    });
  });

  describe('[Product] Create Product Success', () => {
    it('should create a product successfully in state', ( ) => {
      const action = new productActions.CreateProductSuccess(product);
      const productState = reducer(initialState, action);
      expect(productState).toEqual({
        ...initialState,
        products: [product],
        currentProductId: product.id,
        error: ''
      });
    });
  });

  describe('[Product] Create Product Fail', () => {
    it('should fail creating a product in state', ( ) => {
      const error = 'Creating product fail';
      const action = new productActions.CreateProductFail(error);
      const productState = reducer(initialState, action);
      expect(productState).toEqual({
        ...initialState,
        error
      });
    });
  });

  describe('[Product] Delete Product Success', () => {
    it('should delete product successfully in state', () => {
      const action = new productActions.DeleteProductSuccess(product.id);
      const productState = reducer(stateWithProducts, action);
      expect(productState).toEqual({
        ...stateWithProducts,
        products: [],
        currentProductId: null,
        error: ''
      });
    });
  });

  describe('[Product] Delete Product Fail', () => {
    it('should fail deleting product in state', () => {
      const error = 'Deleting product fail';
      const action = new productActions.DeleteProductFail(error);
      const productState = reducer(stateWithProducts, action);
      expect(productState).toEqual({
        ...stateWithProducts,
        error
      });
    });
  });
});
