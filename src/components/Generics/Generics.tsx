/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */

import React from 'react';
import './index.css';
import { ButtonProps, TextAreaProps } from '../Interface/Interface';

export const Button: React.FC<ButtonProps> = ({
  name, clickButton, bgColor, textColor,
}) => (
  <button
    onClick={clickButton}
    type="button"
    style={{
      backgroundColor: `${bgColor}`,
      color: `${textColor}`,
    }}
  >
    {name}
  </button>
);

export const TextArea: React.FC<TextAreaProps> = ({ value, name, changedValue }) => (
  <textarea
    value={value}
    name={name}
    onChange={e => changedValue(e.target.value)}
    placeholder="Type Here"
  />
);
