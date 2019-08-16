import { ITodoState } from './models/models';

export interface AppState {
  readonly todo: ITodoState;
}
