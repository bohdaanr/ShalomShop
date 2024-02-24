import { useState } from 'react';
import './Header.scss';
import classNames from 'classnames';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <a href="#" className="header__logo">
            <img className="header__logo--img" src="./img/watch.svg" alt="logo" />
          </a>
          <div className={classNames('header__burger', {'active': isActive})} onClick={() => setIsActive(!isActive)}>
            <span></span>
          </div>
          <nav className={classNames('header__menu', {'active': isActive})}>
            <a href="#" className="header__link">ГОЛОВНА</a>
            <a href="#watches" className="header__link">ГОДИННИКИ</a>
            <a href="#accessories" className="header__link">АКСЕСУАРИ</a>
          </nav>
        </div>

       </div>

    </header>
  )
}