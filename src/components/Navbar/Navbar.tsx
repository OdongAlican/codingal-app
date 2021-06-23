/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState, useEffect } from 'react';
import './index.css';
import { Button, SectionLink } from '../Generics/Generics';
import Modal from '../Modal/Modal';
import Timer from '../Timer/Timer';

const Navbar = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [hiddenNav, sethiddenNav] = useState<string>('');
  const [showNav, setShowNav] = useState<string>('hide-component');
  const modalHeader = 'Select a reason to end Class';
  const { watch, stopWatch } = Timer();

  const displayModal = (value: boolean) => setModal(value);
  const cancelSubmit = (): void => setModal(false);
  const submitForm = (): void => {
    setModal(false);
    stopWatch();
  };

  const handleResize = () => {
    if (window.innerWidth < 780) {
      sethiddenNav('hide-component');
      setShowNav('');
    } else {
      sethiddenNav('');
      setShowNav('hide-component');
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  const modalDisplay = () => {

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
      <div className={`${hiddenNav} nav-image-section`} />
      <div className={`${hiddenNav} horizontal-section`} />
      <div className={`${showNav} smaller-image-section`} />
      <div className={`${showNav} smaller-icon-section`}>
        <i onClick={modalDisplay} className="fas fa-bars" />
      </div>
      <div className={`${hiddenNav} link-section`}>
        <SectionLink path="/" name="Home" />
        <SectionLink path="/posts" name="View Posts" />
      </div>
      <div className={`${hiddenNav} trial-lesson-section`}>
        Trial Lesson [Grade 1-3]
      </div>
      <div className={`${hiddenNav} timer-section`}>
        { watch }
      </div>
      <div className={`${hiddenNav} nav-button-section `}>
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
