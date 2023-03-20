const HeaderNav = ({navOpen}) => {
    return (
        <nav className='header__nav' aria-label='Primary Navigation'>
            <ul
                className='header__nav-list'
                data-visible={navOpen}
            >
                <li><a className='header__nav-link' href='/'>Home</a></li>
                <li><a className='header__nav-link' href='/'>About</a></li>
                <li><a className='header__nav-link' href='/'>Contact Us</a></li>
                <li><a className='header__nav-link' href='/'>Locations</a></li>
            </ul>
        </nav>
    );
};

export default HeaderNav;

