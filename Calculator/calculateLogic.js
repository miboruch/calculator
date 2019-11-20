export const initialState = {
  currentValue: '0',
  operator: null,
  previousValue: null,
};

export const handleNumberClick = (value, state) => {
  return state.currentValue === '0'
    ? {
        currentValue: `${value}`,
        previousValue: state.previousValue,
        operator: state.operator,
      }
    : {
        currentValue: `${state.currentValue}${value}`,
        previousValue: state.previousValue,
        operator: state.operator,
      };
};

export const handleEqualButton = state => {
  const {currentValue, previousValue, operator} = state;

  const current = Number.parseFloat(currentValue);
  const previous = Number.parseFloat(previousValue);
  const resetState = {
    operator: null,
    previousValue: null,
  };

  switch (operator) {
    case '/':
      return current === 0
        ? {currentValue: 0}
        : {
            currentValue: previous / current,
            ...resetState,
          };
    case '*':
      return {
        currentValue: previous * current,
        ...resetState,
      };
    case '+':
      return {
        currentValue: previous + current,
        ...resetState,
      };
    case '-':
      return {
        currentValue: previous - current,
        ...resetState,
      };
    default:
      return state;
  }
};

const factorial = num => (num === 0 ? 1 : num * factorial(num - 1));

const calculateLogic = (type, value, state) => {
  switch (type) {
    case 'number':
      return handleNumberClick(value, state);
    case 'operator':
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: '0',
      };
    case 'equal':
      return handleEqualButton(state);
    case 'clear':
      return initialState;
    /* functions */
    case 'posneg':
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`,
      };
    case 'percentage':
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
      };
    case 'e':
      return {
        currentValue: `${Number.parseFloat(state.currentValue) * 2.72}`,
      };
    case 'double':
      return {
        currentValue: `${Number.parseFloat(state.currentValue) *
          Number.parseFloat(state.currentValue)}`,
      };
    case 'pi':
      return {
        currentValue: `${Number.parseFloat(state.currentValue) * 3.14}`,
      };
    case 'triple':
      return {
        currentValue: `${Number.parseFloat(state.currentValue) *
          Number.parseFloat(state.currentValue) *
          Number.parseFloat(state.currentValue)}`,
      };
    case 'factorial':
      return {
        currentValue: factorial(Number.parseFloat(state.currentValue)),
      };
    case 'ln':
      return {
        currentValue: Math.log(Number.parseFloat(state.currentValue)),
      };
    case 'log10':
      return {
        currentValue: Math.log10(Number.parseFloat(state.currentValue)),
      };
    case 'exp':
      return {
        currentValue: Math.exp(Number.parseFloat(state.currentValue)),
      };
    case 'sqrt':
      return {
        currentValue: Math.sqrt(Number.parseFloat(state.currentValue)),
      };
    case 'sin':
      return {
        currentValue: Math.asin(Number.parseFloat(state.currentValue)),
      };
    default:
      return state;
  }
};

export default calculateLogic;
