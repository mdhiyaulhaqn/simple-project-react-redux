import { connect } from 'react-redux';
import InputForm from '../components/InputForm';
import React from 'react';
import { calculate } from '../actions';

class InputFormContainer extends React.Component {
  render() {
    return (
      <InputForm {...this.props}/>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
    calculate: () => dispatch(calculate()),
    onSubmit
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(InputFormContainer);
