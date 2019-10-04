import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { square, sign, sqrt } from '../actions/number';

const ScientificBtns = ({ square, sign, sqrt, result, mode }) => {
  return (
    <Fragment>
      <div
        onClick={e => sign(result)}
        className={`col-4 btn btn-secondary ${
          mode === 0 ? 'light-mode' : 'dark-mode'
        }`}
      >
        Sign
      </div>
      <div
        onClick={e => square(result)}
        className={`col-4 btn btn-secondary ${
          mode === 0 ? 'light-mode' : 'dark-mode'
        }`}
      >
        Square
      </div>
      <div
        onClick={e => sqrt(result)}
        className={`col-4 btn btn-secondary ${
          mode === 0 ? 'light-mode' : 'dark-mode'
        }`}
      >
        Square Root
      </div>
    </Fragment>
  );
};

ScientificBtns.propTypes = { state: PropTypes.object.isRequired };

const mapStateToProps = state => ({
  state: state.number
});

export default connect(
  mapStateToProps,
  { square, sign, sqrt }
)(ScientificBtns);
