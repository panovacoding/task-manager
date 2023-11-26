import './Overview.css';
import calendar from "./img/calendar.svg";
import timer from "./img/timer.svg";
import done from "./img/done.svg";
import item1decor from "./img/item1decor.svg";
import item2decor from "./img/item2decor.svg";
import item3decor from "./img/item3decor.svg";

function Overview(props) {

    return (
        <div>
            <h2>Overview</h2>
            <div className="overview__subtitle">Have a bird’s eye view of all your projects</div>
            <div className="overview-list">
                <div className="overview-item">
                    <div className="overview-item__decor">
                        <img src={calendar} alt="icon" />
                    </div>
                    <div className="overview-item__title">
                        Upcoming Tasks
                    </div>
                    <div className="overview-item__bg">
                        <img src={item1decor} alt="" />
                    </div>
                    <div className="overview-item__amount">40</div>
                </div>
                <div className="overview-item">
                    <div className="overview-item__decor">
                        <img src={timer} alt="icon" />
                    </div>
                    <div className="overview-item__title">
                        In-Progress Tasks
                    </div>
                    <div className="overview-item__bg">
                        <img src={item2decor} alt="" />
                    </div>
                    <div className="overview-item__amount">40</div>
                </div>
                <div className="overview-item">
                    <div className="overview-item__decor">
                        <img src={done} alt="icon" />
                    </div>
                    <div className="overview-item__title">
                        Completed Tasks
                    </div>
                    <div className="overview-item__bg">
                        <img src={item3decor} alt="" />
                    </div>
                    <div className="overview-item__amount">40</div>
                </div>
            </div>
        </div>
    );
}

export default Overview;