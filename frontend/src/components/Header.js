import logoMesto from '../image/logo_mesto.svg';

function Header({ pageTitle, name, onSignOut }) {


  return (

    <header className="header">
      <img src={logoMesto} alt="Логотип Места России" className="header__logo" />
      <p className='header__title'>{name}</p>
      <button className='header__action' onClick={onSignOut}>{pageTitle}</button>
    </header>

  );
}

export default Header;