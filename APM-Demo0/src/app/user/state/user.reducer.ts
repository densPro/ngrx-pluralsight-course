import { User } from '../user';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActionsTypes, UserActions } from './user.action';

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}

const initialState: UserState = {
  maskUserName: true,
  currentUser: null
};

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);

export function reducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionsTypes.MaskUserName:
      return {
        ...state,
        maskUserName: action.payload
      };
    default:
      return state;
  }
}
