export function calculate() {
    return (dispatch, getState) => {
      const form = getState().form;
      console.log('formhaq', form);
      const input = {
        futureValue: form.input.futureValue.value,
        interestRate: form.input.interestRate.value,
        period: form.input.period.value,
      };
      dispatch({
        type: 'CALCULATE',
        input,
      });
    }
}