import React from 'react';

import ButtonTypes from '../../types/ButtonTypes';
import { ButtonContainer } from './Button.styles';

type ButtonProps = {
  isSelected: boolean;
  onClick: (type: ButtonTypes, value: string) => void;
  type: ButtonTypes;
  value: string;
}

const Button = ({ isSelected, onClick, type, value }: ButtonProps) => (
  <ButtonContainer 
    isSelected={isSelected}
    onClick={() => onClick(type, value)}
    type={type}
    value={value}
  >
    { value }
  </ButtonContainer>
);

export default Button;
