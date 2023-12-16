import headerLogo from "../Header/components/images/misty-tea-logo.png"
import { useState } from "react";

const Header = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <header className='container-fluid'>
            <div className="row">
                <div className='col-3'>
                    <img className="header-logo" src={headerLogo} />
                </div>
                <nav className='col d-flex align-items-center justify-content-end block-tabs'>
                    <div className={toggleState === 1 ? "tab active-tab" : "tab"} onClick={() => toggleTab(1)}>Tea Blends</div>
                    <div className={toggleState === 2 ? "tab active-tab" : "tab"} onClick={() => toggleTab(2)}>Create Your Own</div>
                    <div className={toggleState === 3 ? "tab active-tab" : "tab"} onClick={() => toggleTab(3)}>About Us</div>
                </nav>
            </div>
            <div className="content-tabs">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <h2>Tea Blends</h2>
                    <p>lorem</p>
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <h2>Create Your Own</h2>
                    <p>lorem</p>
                </div>
                <div className={toggleState === 3 ? "content active-content" : "content"}>
                    <h2>About Us</h2>
                    <p>lorem</p>
                </div>
            </div>
        </header>
    );
}

export default Header;