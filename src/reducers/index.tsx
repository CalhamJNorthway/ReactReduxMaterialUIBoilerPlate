
import { NumberAction } from '../actions';
import { StoreState } from '../types/index';
import { INCREMENT_NUMBER, DECREMENT_NUMBER } from '../actionTypes/index';

export function number(state: StoreState, action: NumberAction): StoreState {
  switch (action.type) {
    case INCREMENT_NUMBER:
      return { 
        ...state, 
        number: state.number + 1 
      };
    case DECREMENT_NUMBER:
      return { 
        ...state, 
        number: Math.max(1, state.number - 1) 
      };
    default:
      return state;
  }
}