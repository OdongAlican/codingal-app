/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */

import React, { useState } from 'react';
import './index.css';
import { Item } from '../Interface/Interface';
import OtherReasons from '../Pages/OtherReasons';

interface ClassProp {
    item : Item,
}

const ClassMenu: React.FC<ClassProp> = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const [routeNav, setRouteNav] = useState(false);
  const [currentModal, setCurrentModal] = useState<number>(0);
  const [currentMojor, setCurrentMojor] = useState<number>(0);

  const showSubnav = (id: number): void => {
    console.log(id, currentMojor, 'two ids');
    setSubnav(!subnav);
    if (id !== currentMojor) {
      setSubnav(true);
    }
    setRouteNav(false);
    setCurrentMojor(id);
    console.log('outside');
  };
  const showRotenav = (id: number): void => {
    setRouteNav(!routeNav);
    if (id !== currentModal) {
      setRouteNav(true);
    }
    setCurrentModal(id);
  };

  return (
    <div className="class-link">
      <div onClick={() => showSubnav(item.id)}>
        <div className="icon-title-section">
          {
            item.id === currentMojor
            && subnav ? (<i className={item.activeIcon} />)
              : (<i className={item.inActiveIcon} />)
            }
          <div className="class-label">{item.title}</div>
        </div>
      </div>
      {
        subnav && item.subDropdown.map((item : Item) => (
          <div
            className="class-dropdown"
            key={item.id}
            onClick={() => showRotenav(item.id)}
          >
            <div className="icon-title-section">
              {
              item.id === currentModal
              && routeNav
                ? (<i className={item.activeIcon} />)
                : (<i className={item.inActiveIcon} />)
              }
              <div className="class-label">{ item.title }</div>
            </div>
          </div>
        ))
      }
      <div className="routes-section">
        {
          currentModal === 5
          && routeNav ? (<OtherReasons />) : null
        }
      </div>
    </div>
  );
};

export default ClassMenu;
