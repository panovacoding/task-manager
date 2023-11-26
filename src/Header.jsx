import logo from "./img/logo.svg"
import "./Header.css"

function Header({children}) {

    return (
        <header className="header">
            <div className="header__logo-container">
                <img src={logo} alt="task manager logo" className="header__img"/>
                <span>Tasker</span>
            </div>
            {children}
        </header>
    );
}

export default Header;