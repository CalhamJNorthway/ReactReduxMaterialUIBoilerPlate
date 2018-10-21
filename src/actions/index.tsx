
import * as actions from '../actionTypes';

export interface IncrementNumber {
    type: actions.INCREMENT_NUMBER;
}

export interface DecrementNumber {
    type: actions.DECREMENT_NUMBER;
}

export type NumberAction = IncrementNumber | DecrementNumber;

export function incrementNumber(): IncrementNumber {
    return {
        type: actions.INCREMENT_NUMBER
    };
}

export function decrementNumber(): DecrementNumber {
    return {
        type: actions.DECREMENT_NUMBER
    };
}