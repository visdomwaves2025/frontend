import { Outlet, NavLink } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '200px', background: '#eee', padding: '1rem' }}>
        <h3>Sidebar</h3>
        <nav>
          <NavLink to="/dashboard">Dashboard</NavLink><br />
          <NavLink to="/admin">Admin</NavLink><br />
          <NavLink to="/login" onClick={() => localStorage.clear()}>Logout</NavLink>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
