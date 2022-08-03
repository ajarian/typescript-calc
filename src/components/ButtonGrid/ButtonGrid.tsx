import React from 'react';

import Button from '../Button';
import { ButtonMap } from '../../resources/ButtonMap';
import { ButtonGridContainer } from './ButtonGrid.styles';
import ButtonTypes from '../../types/ButtonTypes';
import ModifierTypes from '../../types/ModifierTypes';

type ButtonGridProps = {
  canClear: boolean;
  handleButtonClick: (type: ButtonTypes, value: string) => void;
  selectedOperator: string | null;
};

const ButtonGrid = ({
  canClear,
  handleButtonClick,
  selectedOperator,
}: ButtonGridProps) => {
  const getButtonValue: (buttonValue: string) => string = (buttonValue) => {
    if (!canClear && buttonValue === ModifierTypes.CLEAR) {
      return ModifierTypes.ALL_CLEAR;
    }
    return buttonValue;
  };

  return (
    <ButtonGridContainer>
      {ButtonMap.map((row) =>
        row.map((calcButton) => (
          <Button
            key={calcButton.value}
            isSelected={selectedOperator === calcButton.value}
            onClick={handleButtonClick}
            type={calcButton.type}
            value={getButtonValue(calcButton.value)}
          />
        ))
      )}
    </ButtonGridContainer>
  );
};

export default ButtonGrid;
