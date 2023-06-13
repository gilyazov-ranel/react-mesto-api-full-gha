

export default function Menu(name, pageTitle, onSignOut) {
    return (
        <>
            <p className='header__title'>{name}</p>
            <button className='header__action' onClick={onSignOut}>{pageTitle}</button>
        </>
    )
}