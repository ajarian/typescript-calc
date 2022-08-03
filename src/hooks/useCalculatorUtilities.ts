import ModifierTypes from '../types/ModifierTypes';
import OperatorTypes from '../types/OperatorTypes';

const useCalculatorUtilities = () => {
  const determineModificationResult: (
    value: string,
    selectedModifier: string,
  ) => string = (value, selectedModifier) => {
    let modificationResult = '0';
    switch(selectedModifier) {
      case ModifierTypes.CLEAR:
        modificationResult = '0';
        break; 
      case ModifierTypes.PERCENTAGE:
        modificationResult = (
          Number.parseFloat(value) / 100
        ).toLocaleString();
        break;
      case ModifierTypes.POSITIVE_NEGATIVE:
        modificationResult = value.includes('-') ? value.replace('-', '') : `-${value}`;
        break;
    }
    return modificationResult
  };

  const determineNewValue: (
    selectedValue: string,
    previousValue: string | null
  ) => string = (selectedValue, previousValue) => {
    if (previousValue) {
      return isValueAtMax(previousValue)
        ? previousValue
        : `${previousValue}${selectedValue}`;
    }
    return selectedValue;
  };
 
  const determineOperationResult: (
    firstNumber: string,
    secondNumber: string,
    selectedOperator: string
  ) => string = (firstNumber, secondNumber, selectedOperator) => {
    let operationResult = '0';
    switch (selectedOperator) {
      case OperatorTypes.ADD:
        operationResult = (
          Number.parseFloat(firstNumber) + Number.parseFloat(secondNumber)
        ).toLocaleString();
        break;
      case OperatorTypes.DIVIDE:
        operationResult = (
          Number.parseFloat(firstNumber) / Number.parseFloat(secondNumber)
        ).toLocaleString();
        break;
      case OperatorTypes.MULTIPLY:
        operationResult = (
          Number.parseFloat(firstNumber) * Number.parseFloat(secondNumber)
        ).toLocaleString();
        break;
      case OperatorTypes.SUBTRACT:
        operationResult = (
          Number.parseFloat(firstNumber) - Number.parseFloat(secondNumber)
        ).toLocaleString();
        break;
    }
    return operationResult;
  };

  const getDisplayValue: (
    calculatorValues: {
      firstNumber: string | null,
      secondNumber: string | null
    }
  ) => string = (calculatorValues) => {
    const { firstNumber, secondNumber } = calculatorValues;
    if (secondNumber) return Number.parseFloat(secondNumber).toLocaleString();
    return firstNumber ? Number.parseFloat(firstNumber).toLocaleString() : '0';
  };

  const isValueAtMax: (value: string) => boolean = (value) => {
    const formattedValue = value.replace('.', '').replaceAll(',', '');
    return formattedValue.length === 9;
  };

  return {
    determineModificationResult,
    determineNewValue,
    determineOperationResult,
    getDisplayValue,
    isValueAtMax,
  };
};

export default useCalculatorUtilities;
