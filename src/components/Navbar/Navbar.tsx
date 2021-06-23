/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';
import './index.css';
import { Button, SectionLink } from '../Generics/Generics';
import Modal from '../Modal/Modal';
import Timer from '../Timer/Timer';

const Navbar = () => {
  const [modal, setModal] = useState<boolean>(false);
  const modalHeader = 'Select a reason to end Class';
  const { watch, stopWatch } = Timer();

  const displayModal = (value: boolean) => setModal(value);
  const cancelSubmit = (): void => setModal(false);
  const submitForm = (): void => {
    setModal(false);
    stopWatch();
  };

  return (
    <div className="navbar-section">
      {modal && (
      <Modal
        header={modalHeader}
        submitForm={submitForm}
        cancelSubmit={cancelSubmit}
        modalFunction={displayModal}
      />
      )}
      <div className="nav-image-section" />
      <div className="horizontal-section" />
      <SectionLink path="/" name="Home" />
      <SectionLink path="/posts" name="View Posts" />
      <div className="trial-lesson-section">
        Trial Lesson [Grade 1-3]
      </div>
      <div className="timer-section">
        { watch }
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
