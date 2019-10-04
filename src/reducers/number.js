import {
  APPEND,
  CLEAR,
  EQUALS,
  OPERATE,
  SIGN,
  SQRT,
  SQUARE
} from '../actions/types';

const initialState = {
  btns: [
    '1',
    '2',
    '3',
    '+',
    '4',
    '5',
    '6',
    '-',
    '7',
    '8',
    '9',
    '*',
    'Clear',
    '0',
    '=',
    '/'
  ],
  num1: '',
  num2: '',
  operation: '',
  result: '0',
  index: 0
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case APPEND:
      return {
        ...state,
        num1:
          state.index === 0 || state.index === 1
            ? state.num1 + payload.text
            : state.num1,
        num2: state.index === 2 ? state.num2 + payload.text : state.num2,
        result:
          state.index === 0 || state.index === 1
            ? state.num1 + payload.text
            : state.num2 + payload.text
      };
    case OPERATE:
      return {
        ...state,
        index:
          isFinite(eval(state.num1 + state.operation + state.num2)) === true
            ? 2
            : 0,
        operation:
          isFinite(eval(state.num1 + state.operation + state.num2)) === true
            ? payload.text
            : '',
        result:
          state.index === 0
            ? ''
            : isFinite(eval(state.num1 + state.operation + state.num2)) === true
            ? eval(state.num1 + state.operation + state.num2)
            : 'infinity',
        num1:
          state.index === 2
            ? isFinite(eval(state.num1 + state.operation + state.num2)) === true
              ? eval(state.num1 + state.operation + state.num2)
              : ''
            : state.num1,
        num2: ''
      };
    case EQUALS:
      return {
        ...state,
        result:
          isFinite(eval(state.num1 + state.operation + state.num2)) === true
            ? eval(state.num1 + state.operation + state.num2)
            : 'infinity',
        num1:
          isFinite(eval(state.num1 + state.operation + state.num2)) === true
            ? eval(state.num1 + state.operation + state.num2)
            : '',
        num2: '',
        operation: '',
        index:
          isFinite(eval(state.num1 + state.operation + state.num2)) === true
            ? 2
            : 0
      };
    case CLEAR:
      return {
        ...state,
        result: 0,
        num1: '',
        num2: '',
        operation: '',
        index: 0
      };
    case SQUARE:
      return {
        ...state,
        result:
          isFinite(state.result) === true
            ? Math.pow(state.result, 2)
            : 'infinity'
      };
    case SIGN:
      return {
        ...state,
        result: isFinite(state.result) === true ? state.result * -1 : 'infinity'
      };
    case SQRT:
      return {
        ...state,
        result:
          isFinite(eval(state.result)) === true
            ? Math.pow(state.result, 0.5)
            : 'infinity'
      };
    default:
      return state;
  }
}
