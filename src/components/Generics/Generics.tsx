/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */

import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import {
  ButtonProps, TextAreaProps, LinkProps, PostData,
} from '../Interface/Interface';

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

export const SectionLink: React.FC<LinkProps> = ({ path, name }) => (
  <Link
    to={`${path}`}
  >
    {name}
  </Link>
);

export const PostDisplay: React.FC<PostData> = ({ title, body, id }) => (
  <div className="general-post-section">
    <div className="identification-section">
      Post Id
      {' '}
      :
      <span>{id}</span>
    </div>
    <div className="top-post-title-section">
      <div className="post-title-section">
        Title
        {' '}
        :
      </div>
      <div className="post-title-information">{title}</div>
    </div>
    <div className="lower-post-details-section">
      <div className="post-details-header">
        Details
        {' '}
        :
      </div>
      <div className="post-details-information">
        {
        body
      }
      </div>
    </div>
  </div>
);
