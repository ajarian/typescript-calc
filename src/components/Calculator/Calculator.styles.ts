import styled from 'styled-components';

export const CalculatorContainer = styled.div`
  width: 390px;
  height: 760px;
  background-color: black;
  color: white;
  margin-right: auto;
  margin-left: auto;
`;

interface DisplayProps {
  isMaxValue: boolean;
}

export const DisplayContainer = styled.div<DisplayProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: ${props => props.isMaxValue ? '56px': '64px'};
  padding-top: 152px;
  margin: 0 24px 24px 24px;
  width: 86%;
  height: 75.5px;
  overflow-x: clip;
  white-space: nowrap;
`;
