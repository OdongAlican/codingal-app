/* eslint-disable import/extensions */

import React, { useState } from 'react';
import './index.css';
import { Button } from '../Generics/Generics';
import Modal from '../Modal/Modal';

const Navbar = () => {
  const [modal, setModal] = useState<boolean>(false);
  const modalHeader = 'Select a reason to end Class';

  const displayModal = (value: boolean): void => setModal(value);

  return (
    <div className="navbar-section">
      {modal && (<Modal header={modalHeader} modalFunction={displayModal} />)}
      <div className="nav-image-section" />
      <div className="horizontal-section" />
      <div className="trial-lesson-section">
        Trial Lesson [Grade 1-3]
      </div>
      <div className="timer-section">
        34
        {' '}
        :
        {' '}
        40
      </div>
      <div className="nav-button-section">
        <Button
          name="End Class"
          clickButton={() => displayModal(true)}
          bgColor="#F35742"
          textColor="white"
        />
      </div>
    </div>
  );
};

export default Navbar;
