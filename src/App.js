import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { append, clear, equals, operate } from './actions/number';
import PropTypes from 'prop-types';
import ScientificBtns from './components/ScientificBtns';
import './App.css';

const App = ({ append, clear, equals, operate, state }) => {
  const [calcState, setCalcState] = useState({
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
  });
  const [sciencebtns, setScienceBtns] = useState(false);
  const [mode, setMode] = useState(0);

  useEffect(() => {
    setCalcState(state);
    mode === 1
      ? document.body.classList.add('body-dark')
      : document.body.classList.remove('body-dark');
  }, [state, mode]);

  return (
    <Fragment>
      <div className='container'>
        <input
          type='text'
          name='result'
          style={{
            textAlign: 'right',
            padding: '50px',
            marginTop: '50px',
            marginBottom: '50px',
            fontSize: '30px'
          }}
          onChange={e => setCalcState(state)}
          value={calcState.result}
          className='form-control'
        />

        <div className='row'>
          {calcState.btns.map((item, key) => {
            if (item === 'Clear') {
              return (
                <div
                  onClick={e => clear()}
                  key={key}
                  className={`col-3 btn btn-secondary ${
                    mode === 0 ? 'light-mode' : 'dark-mode'
                  }`}
                >
                  {item}
                </div>
              );
            }
            if (item === '+' || item === '-' || item === '*' || item === '/') {
              return (
                <div
                  onClick={e => operate(item, calcState.result)}
                  key={key}
                  className={`col-3 btn btn-secondary ${
                    mode === 0 ? 'light-mode' : 'dark-mode'
                  }`}
                >
                  {item}
                </div>
              );
            }
            if (item === '=') {
              return (
                <div
                  onClick={e => equals(calcState.result)}
                  key={key}
                  className={`col-3 btn btn-secondary ${
                    mode === 0 ? 'light-mode' : 'dark-mode'
                  }`}
                >
                  {item}
                </div>
              );
            } else {
              return (
                <div
                  onClick={e => append(item)}
                  key={key}
                  className={`col-3 btn btn-secondary ${
                    mode === 0 ? 'light-mode' : 'dark-mode'
                  }`}
                >
                  {item}
                </div>
              );
            }
          })}
          <div
            onClick={e =>
              sciencebtns === true
                ? setScienceBtns(false)
                : setScienceBtns(true)
            }
            className={`col-12 btn btn-secondary ${
              mode === 0 ? 'light-mode' : 'dark-mode'
            }`}
          >
            Get Scientific
          </div>
          {sciencebtns === true ? (
            <ScientificBtns result={calcState.result} mode={mode} />
          ) : (
            ''
          )}
          <div onClick={e => setMode(0)} className='col-6 btn btn-light'>
            Light Mode
          </div>
          <div onClick={e => setMode(1)} className='col-6 btn btn-dark'>
            Dark Mode
          </div>
        </div>
      </div>
    </Fragment>
  );
};

App.propTypes = {
  append: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
  equals: PropTypes.func.isRequired,
  operate: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  state: state.number
});

export default connect(
  mapStateToProps,
  { append, clear, equals, operate }
)(App);
