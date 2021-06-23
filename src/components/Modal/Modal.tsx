/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */

import React from 'react';
import './index.css';
import { ClassData } from './ClassData';
import ClassMenu from './ClassMenu';
import { Button } from '../Generics/Generics';

interface ModalProps {
    header: string,
    modalFunction: (value: boolean) => void,
}

const Modal: React.FC<ModalProps> = ({ header, modalFunction }) => {
  const submitForm = () => console.log('submit form');
  const cancelSubmit = () => console.log('cancel submit');
  return (
    <div className="modal-display-section">
      <div className="inner-modal-content">
        <i className="far fa-times-circle" onClick={() => modalFunction(false)} />
        <div className="modal-content">
          <div className="modal-header-section">{header}</div>
          <div className="class-attendence-information">
            {
            ClassData.map((item: any, index : any) => (
              <ClassMenu item={item} key={index} />
            ))
          }
          </div>
          <div className="lower-buttons-section">
            <Button name="End Class" clickButton={submitForm} bgColor="#F35742" textColor="white" />
            <Button name="Cancel" clickButton={cancelSubmit} bgColor="white" textColor="gray" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
