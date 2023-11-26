
import Overview from './Overview';
import Tasks from './Tasks';

function Content({activeTab}) {
    if(activeTab === 1) {
        return (
            <Overview />
        );
    } else {
        return (
            <Tasks />
        )
    }
}

export default Content;