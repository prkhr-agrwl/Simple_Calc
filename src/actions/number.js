import {
  APPEND,
  CLEAR,
  EQUALS,
  OPERATE,
  SIGN,
  SQRT,
  SQUARE
} from '../actions/types';

export const append = (text, index) => dispatch => {
  try {
    dispatch({
      type: APPEND,
      payload: { text, index }
    });
  } catch (error) {
    console.error(error);
  }
};

export const operate = (text, result) => dispatch => {
  try {
    dispatch({
      type: OPERATE,
      payload: { text, result }
    });
    // console.log(text);
  } catch (error) {
    console.error(error);
  }
};

export const equals = result => dispatch => {
  try {
    dispatch({
      type: EQUALS,
      payload: { result }
    });
  } catch (error) {
    console.error(error);
  }
};

export const clear = () => dispatch => {
  try {
    dispatch({
      type: CLEAR
    });
  } catch (error) {
    console.error(error);
  }
};

export const square = result => dispatch => {
  try {
    dispatch({
      type: SQUARE,
      payload: { result }
    });
  } catch (error) {
    console.error(error);
  }
};

export const sqrt = result => dispatch => {
  try {
    dispatch({
      type: SQRT,
      payload: { result }
    });
  } catch (error) {
    console.error(error);
  }
};

export const sign = result => dispatch => {
  try {
    dispatch({
      type: SIGN,
      payload: { result }
    });
  } catch (error) {
    console.error(error);
  }
};
