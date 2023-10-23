import logo from "./img/logo.svg"
import OverviewLogo from "./Components/OverviewLogo"
import "./Header.css"
import { useState } from "react";

function Header(props) {

    const [tabActive, toggleTabActive] = useState(1);


    const setActive = (index) => {
        toggleTabActive(index)
    }

    return (
        <header className="header">
            <img src={logo} alt="task manager logo" className="header__img"/>
            <button 
                tabActive
                className={tabActive === 1 ? "header__tab header__tab_active" : "header__tab"}
                onClick={() => setActive(1)}
            >
                <OverviewLogo/>
                <span>overview</span>
            </button>
            <button 
                tabActive 
                className={tabActive === 2 ? "header__tab header__tab_active" : "header__tab"}
                onClick={() => setActive(2)}
            >
                <OverviewLogo isOverView={false}/>
                <span>tasks</span>
            </button>
        </header>
    );
}

export default Header;