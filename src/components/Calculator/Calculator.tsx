import React, { useState } from 'react';

import ButtonGrid from '../ButtonGrid';
import ButtonTypes from '../../types/ButtonTypes';
import { CalculatorContainer, DisplayContainer } from './Calculator.styles';
import OperatorTypes from '../../types/OperatorTypes';
import useCalculatorUtilities from '../../hooks/useCalculatorUtilities';
import ModifierTypes from '../../types/ModifierTypes';

type ValuesInterface = {
  firstNumber: string | null;
  secondNumber: string | null;
};

const Calculator = () => {
  const [calculatorValues, setCalculatorValues] = useState<ValuesInterface>({
    firstNumber: null,
    secondNumber: null,
  });
  const [selectedOperator, setSelectedOperator] = useState<string | null>(null);
  const [selectedModifier, setSelectedModifier] = useState<string | null>(null);
  const {
    determineModificationResult,
    determineNewValue,
    determineOperationResult,
    getDisplayValue,
    isValueAtMax,
  } = useCalculatorUtilities();

  const resetState: () => void = () => {
    setCalculatorValues({ firstNumber: null, secondNumber: null });
    setSelectedOperator(null);
    setSelectedModifier(null);
  };

  const handleCompleteOperation: () => void = () => {
    const { firstNumber, secondNumber } = calculatorValues;
    if (firstNumber && secondNumber && selectedOperator) {
      const result = determineOperationResult(
        firstNumber,
        secondNumber,
        selectedOperator
      );
      setCalculatorValues({ firstNumber: result, secondNumber: null });
    }
  };

  const onModifierButtonClick: (modifier: string) => void = (modifier) => {
    const { firstNumber, secondNumber } = calculatorValues;

    if (
      selectedModifier === ModifierTypes.CLEAR &&
      (secondNumber === '0' || (firstNumber === '0' && !secondNumber))
    ) {
      resetState();
    } else {
      if (secondNumber) {
        setCalculatorValues({
          firstNumber,
          secondNumber: determineModificationResult(secondNumber, modifier),
        });
      }

      if (!secondNumber && firstNumber) {
        setCalculatorValues({
          firstNumber: determineModificationResult(firstNumber, modifier),
          secondNumber,
        });
      }

      setSelectedModifier(modifier);
    }
  };

  const onNumberButtonClick: (value: string) => void = (value) => {
    const { firstNumber, secondNumber } = calculatorValues;

    if (firstNumber && selectedOperator) {
      setCalculatorValues({
        firstNumber,
        secondNumber: determineNewValue(value, secondNumber),
      });
    } else {
      setCalculatorValues({
        firstNumber: determineNewValue(value, firstNumber),
        secondNumber,
      });
    }
  };

  const onOperatorButtonClick: (operator: string) => void = (operator) => {
    const { firstNumber, secondNumber } = calculatorValues;
    if (!firstNumber) setCalculatorValues({ firstNumber: '0', secondNumber });
    if (selectedOperator) handleCompleteOperation();
    setSelectedOperator(operator === OperatorTypes.EQUALS ? null : operator);
  };

  const handleButtonClick: (type: string, value: string) => void = (
    type,
    value
  ) => {
    if (type === ButtonTypes.MODIFIER) onModifierButtonClick(value);
    if (type === ButtonTypes.NUMBER) onNumberButtonClick(value);
    if (type === ButtonTypes.OPERATOR) onOperatorButtonClick(value);
  };

  const canClearValues = Boolean(
    calculatorValues.firstNumber || calculatorValues.secondNumber
  );

  return (
    <CalculatorContainer>
      <DisplayContainer
        isMaxValue={isValueAtMax(getDisplayValue(calculatorValues))}
      >
        {getDisplayValue(calculatorValues)}
      </DisplayContainer>
      <ButtonGrid
        canClear={canClearValues}
        handleButtonClick={handleButtonClick}
        selectedOperator={selectedOperator}
      />
    </CalculatorContainer>
  );
};

export default Calculator;
