import "./Tasks.css";

function Tasks(props) {
  return (
    <div>
      <h2>Tasks</h2>
      <div className="tasks">
        <div className="task-list-container">
          <div className="task-list__title-container">
            <h3>Upcoming</h3>
            <button type="button">+</button>
          </div>
          <ul className="task-list">
            <li>Ideation with Design Team</li>
            <li>Wireframing and UI Design</li>
            <li>Meet-up with the Marketing team</li>
          </ul>
        </div>
        <div className="task-list-container">
          <div className="task-list__title-container">
            <h3>In-Progress</h3>
            <button type="button">+</button>
          </div>
          <ul className="task-list">
            <li>Developing the landing page and login/signup pages</li>
            <li>Test Run with control group</li>
          </ul>
        </div>
        <div className="task-list-container">
          <div className="task-list__title-container">
            <h3>Completed</h3>
            <button type="button">+</button>
          </div>
          <ul className="task-list">
            <li>Market Research and Analysis</li>
            <li>Finalizing vendors for Plant supply</li>
            <li>Market Research and Analysis</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
