import MenuItem from "./components/MenuItem";
import headerLogo from "../Header/components/images/tea-logo.png"

const Header = () => {
    return (
        <header className='container-fluid'>
            <div className="row">
                <div className='col-3'>
                    <img className="header-logo" src={headerLogo} />
                </div>
                <nav className='col d-flex align-items-center justify-content-end'>
                    <ul className='d-flex list-unstyled align-items-end gap-3'>
                        <MenuItem text="Tea Blends" link="#" />
                        <MenuItem text="Create Your Own" link="#" />
                        <MenuItem text="About Us" link="#" />
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;