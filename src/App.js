
import './App.css';
import Content from './Content';
import Header from './Header';
import Overview from './Overview';
import Tasks from './Tasks';
import Button from './Components/Button';
import OverviewLogo from './Components/OverviewLogo';
import { useState } from 'react';

function App() {

  const [tabActive, toggleTabActive] = useState(1);


  const setActive = (index) => {
      toggleTabActive(index)
      console.log(tabActive);
  }


  return (
    <div className="App">
      <Header>
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
      </Header>
      <Content activeTab={tabActive}/>
    </div>
  );
}

export default App;
