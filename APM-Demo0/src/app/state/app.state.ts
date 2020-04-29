import { UserState } from '../user/state/user.reducer';

export interface State {
  // products: ProductState; this breaks lazy loading
  users: UserState;
}
