import { Link, Outlet } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <h1>
        کتابخانه من
      </h1>
      {/*about us - Books*/}
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/books">کتابها</Link>
        {" "}
        <Link to="/about-us">درباره ما</Link>
      </nav>
        {/* for nested routing  :   */}
        <Outlet />
    </div>
  );
}

export default App;
