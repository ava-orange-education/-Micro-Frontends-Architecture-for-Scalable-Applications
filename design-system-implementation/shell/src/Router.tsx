import { Route, Routes, useNavigate } from 'react-router-dom';
import TasksComponent, { AvailableRoutes } from 'tasks/tasks';

const ProfileComponent = () => <div>Profile Component</div>;
const NotFoundComponent = () => <div>NotFoundComponent</div>;

const AppRouter = () => {
  const navigate = useNavigate();

  /** Shell Application Router */
  const onNavigate = (page: AvailableRoutes) => {
    //any possible router validation ..

    navigate(`/${page}`);
  };

  return (
    <Routes>
      <Route path="/" element={<TasksComponent onNavigate={onNavigate} />} />
      <Route path="/profile" element={<ProfileComponent />} />
      <Route path="*" element={<NotFoundComponent />} />
    </Routes>
  );
};

export default AppRouter;

