import ButtonTypes from '../types/ButtonTypes';
import ModifierTypes from '../types/ModifierTypes';
import OperatorTypes from '../types/OperatorTypes';

export const ButtonMap: { type: ButtonTypes; value: string }[][] = [
  [
    {
      type: ButtonTypes.MODIFIER,
      value: ModifierTypes.CLEAR,
    },
    {
      type: ButtonTypes.MODIFIER,
      value: ModifierTypes.POSITIVE_NEGATIVE,
    },
    {
      type: ButtonTypes.MODIFIER,
      value: ModifierTypes.PERCENTAGE,
    },
    {
      type: ButtonTypes.OPERATOR,
      value: OperatorTypes.DIVIDE,
    },
  ],
  [
    {
      type: ButtonTypes.NUMBER,
      value: '7',
    },
    {
      type: ButtonTypes.NUMBER,
      value: '8',
    },
    {
      type: ButtonTypes.NUMBER,
      value: '9',
    },
    {
      type: ButtonTypes.OPERATOR,
      value: OperatorTypes.MULTIPLY,
    },
  ],
  [
    {
      type: ButtonTypes.NUMBER,
      value: '4',
    },
    {
      type: ButtonTypes.NUMBER,
      value: '5',
    },
    {
      type: ButtonTypes.NUMBER,
      value: '6',
    },
    {
      type: ButtonTypes.OPERATOR,
      value: OperatorTypes.SUBTRACT,
    },
  ],
  [
    {
      type: ButtonTypes.NUMBER,
      value: '1',
    },
    {
      type: ButtonTypes.NUMBER,
      value: '2',
    },
    {
      type: ButtonTypes.NUMBER,
      value: '3',
    },
    {
      type: ButtonTypes.OPERATOR,
      value: OperatorTypes.ADD,
    },
  ],
  [
    {
      type: ButtonTypes.NUMBER,
      value: '0',
    },
    {
      type: ButtonTypes.NUMBER,
      value: '.',
    },
    {
      type: ButtonTypes.OPERATOR,
      value: OperatorTypes.EQUALS,
    },
  ],
];
