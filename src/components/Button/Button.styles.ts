import styled, { DefaultTheme } from 'styled-components';

import ButtonTypes from '../../types/ButtonTypes';

const getButtonBackgroundColor = (type: ButtonTypes, isSelected: boolean, theme: DefaultTheme) => {
  if (type === ButtonTypes.MODIFIER) {
    return theme.colors.lightGray;
  }
  if (type === ButtonTypes.OPERATOR) {
    return isSelected ? theme.colors.white : theme.colors.orange;
  }
  return theme.colors.darkGray;
};

const getButtonColor = (type: ButtonTypes, isSelected: boolean, theme: DefaultTheme ) => {
  if (type === ButtonTypes.MODIFIER) return theme.colors.black
  if (type === ButtonTypes.OPERATOR) return isSelected ? theme.colors.orange : theme.colors.white;
  return theme.colors.white;
};

interface ContainerProps {
  isSelected: boolean;
  type: ButtonTypes;
  value: string;
}

export const ButtonContainer = styled.div<ContainerProps>`
  height: 73.5px;
  background-color: ${props => getButtonBackgroundColor(props.type, props.isSelected, props.theme)};
  border-radius: ${props => props.value === '0' ? '500px' : '100%'};;
  color: ${props => getButtonColor(props.type, props.isSelected, props.theme)};
  display: flex;
  align-items: center;
  justify-content: ${props => props.value === '0' ? 'flex-start' : 'center'};;
  font-size: 24px;
  grid-column-end: ${props => props.value === '0' ? 3 : ''};
  grid-column-start: ${props => props.value === '0' ? 1 : ''};
  padding-left: ${props => props.value === '0' ? '30px' : ''};

  :hover {
    cursor: pointer;
  }
`;
