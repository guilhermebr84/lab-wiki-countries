import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div className="container-fluid">
        <h1 className="navbar-brand">WIKI COUNTRIES</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/About" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/CountriesList" className="nav-link">
                Countries List
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
