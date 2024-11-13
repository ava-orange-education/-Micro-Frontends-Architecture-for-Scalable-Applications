import tasks from './tasks.json';
import './tasks.css';

export default function Tasks() {
  return (
    <div className="tasks">
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
