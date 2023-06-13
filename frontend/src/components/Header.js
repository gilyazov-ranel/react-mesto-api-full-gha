import { MemoryRouter } from 'react-router-dom';
import logoMesto from '../image/logo_mesto.svg';
import Menu from './Menu';

function Header({ pageTitle, name, onSignOut, windowWidth }) {


  return (

    <header className="header">
      <img src={logoMesto} alt="Логотип Места России" className="header__logo" />
      {windowWidth > 500 ?
        <>
          <p className='header__title'>{name}</p>
          <button className='header__action' onClick={onSignOut}>{pageTitle}</button>
        </> :
        <>
          <div className='header__mobil-button'>
            <div className="header__mobil">
              <span />
            </div>

          </div>
          {/* <p className='header__title'>{name}</p>
          <button className='header__action' onClick={onSignOut}>{pageTitle}</button> */}
        </>
      }


      <Menu />
    </header>

  );
}

export default Header;