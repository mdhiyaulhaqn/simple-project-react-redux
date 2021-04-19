import React from 'react';
import { connect } from 'react-redux';
// import './styles.css';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { calculate } from '../actions';

let InputForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} className="form-group">
      <div>
        <label htmlFor="futureValue">Future Value &nbsp;</label>
          <Field name="futureValue" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="interestRate">Interest Rate &nbsp;</label>
        <Field name="interestRate" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="period">Period (year) &nbsp;</label>
        <Field name="period" component="input" type="number" />
      </div>
      <button className="button btn btn-primary" type="submit">Calculate</button>
    </form>
  )
}

InputForm = reduxForm({
  form: 'input',
})(InputForm);

const selector = formValueSelector('input');

InputForm = connect(state => {
  const { futureValue, interestRate, period } = selector(state, 'futureValue', 'interestRate', 'period')
  return { futureValue
    , interestRate, period };
})(InputForm)

export default InputForm;
