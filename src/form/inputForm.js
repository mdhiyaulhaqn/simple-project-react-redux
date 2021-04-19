import React from 'react';
import { connect } from 'react-redux';
// import './styles.css';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { calculate } from '../actions';

const validate = (values) => {
  const errors = {};

  if (!values.futureValue) {
    errors.futureValue = 'Please provide the Future Value';
  }

  if (!values.interestRate) {
    errors.interestRate = 'Please provide the Interest Rate';
  }

  if (!values.interestRate) {
    errors.period = 'Please provide the Period';
  }

  return errors;
}

let InputForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} className="form-group">
      <div>
        <label htmlFor="futureValue">Future Value</label>
          <Field name="futureValue" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="interestRate">Interest Rate</label>
        <Field name="interestRate" component="input" type="number" />
      </div>
      <div>
        <label htmlFor="period">Period (year)</label>
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




const mapDispatchToProps = (dispatch) => {
  return {
    calculateInput: (id) => dispatch({type: 'CALCULATE', id: id})
  }
}

// export default connect(
//   mapDispatchToProps
// )(InputForm);


// const onSubmit = (values, dispatch) => {
//   dispatch(calculate());
// }

// export default reduxForm({
//   form: 'input',
//   onSubmit
// })(InputForm);

// const InputForm = ({ calculate, fields: {futureValue, interestRate, period}, handleSubmit }) => {
//   return (
//     <form
//       className="InputForm-form"
//       onSubmit={handleSubmit(calculate)}
//     >
//       <div>
//         <input
//           type="text"
//           placeholder="First Name"
//           className="InputForm-input"
//           {...futureValue}
//         />
//         {futureValue.touched && futureValue.error && <div className="InputForm-error">{futureValue.error}</div>}
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Last Name"
//           className="InputForm-input"
//           {...interestRate}
//         />
//         {interestRate.touched && interestRate.error && <div className="InputForm-error">{interestRate.error}</div>}                  
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Last Name"
//           className="InputForm-input"
//           {...period}
//         />
//         {period.touched && period.error && <div className="InputForm-error">{period.error}</div>}                  
//       </div>
//       <button
//         type="submit"
//         className="InputForm-button"
//       >
//         Submit
//       </button>
//     </form>
//   );
// }

// // const onSubmit = (values, dispatch) => {
// //   dispatch(calculate);
// // };

// export default reduxForm({
//   form: 'input',
//   fields: ['futureValue', 'interestRate', 'period'],
//   validate,
// })(InputForm);

// alternatif
// creatReduxeForm = reduxForm({form: 'employee', fields: ['futureValue', 'interestRate', 'period'], validate})
// inputForm = createReduxForm(InputForm);
// export default inputForm;
