import { Action } from '@ngrx/store';

export enum UserActionsTypes {
  MaskUserName = '[User] Mask User Name'
}

export class MaskUserName implements Action {
  readonly type = UserActionsTypes.MaskUserName;

  constructor(public payload: boolean) { }
}

export type UserActions = MaskUserName;
