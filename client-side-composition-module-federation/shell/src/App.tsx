import './App.css';
import SearchComponent from 'search/search';
import TasksComponent from 'tasks/tasks';
import ActionComponent from 'tasks/actions';
import Menu from './Menu';

const App = () => {
  return (
    <div className="content">
      <header>
        <h1>Shell Application</h1>
        <SearchComponent label="Search for tasks" />
      </header>
      <section className="main">
        <ActionComponent />
        <section className="center">
          <Menu />
          <TasksComponent />
        </section>
      </section>
    </div>
  );
};

export default App;
