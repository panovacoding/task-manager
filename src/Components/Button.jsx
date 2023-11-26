import React from "react";
import OverviewLogo from "./OverviewLogo";

function Button({tabActive, orderNumber, text, isOverviewSvg = true, fn}) {
    
  return (
    <button 
    onClick={() => fn}
    className={tabActive === orderNumber ? "header__tab header__tab_active" : "header__tab"}
    >
      <OverviewLogo isOverView={isOverviewSvg}/>
      <span>{text}</span>
    </button>
  );
}

export default Button;
