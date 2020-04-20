import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement } from '../actions/counter.actions';


export const counterFeatureKey = 'counter';

export interface CounterState {
  counter: number;
}

export const initialState: CounterState = {
  counter:0
};


export const counterReducer = createReducer(
  initialState,
  on(increment , state => ({ ...state, counter: state.counter + 2}) ),
  on(decrement, state => ({...state, counter: state.counter - 1}))
);

export function reducer(state: CounterState | undefined, action: Action) {
  return counterReducer(state, action);
}
