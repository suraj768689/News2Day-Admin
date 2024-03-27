import React, { useState } from 'react';
import { Link} from 'react-router-dom';

const AccountNav = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Logging in with:', email, password);
  };

  const handleForgotPassword = () => {
    // Implement forgot password logic here
    setForgotPassword(true);
    console.log('Forgot password clicked');
  };

  return (
    <nav className="navbar bg-body-tertiary fixed-top" >
      <div className="container-fluid" style={{backgroundColor:"lightGray"}}>
        <Link to='/' className="navbar-brand" >News2Day - Admin Panel</Link>
        <button className="navbar-toggler" type="button" onClick={handleToggle} data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
           <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Admin Account</h5>
              <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Id</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              {forgotPassword &&
                <p>Forgot Password? Click <a href="#">here</a>.</p>
              }
              {!forgotPassword &&
                <button type="button" className="btn btn-link" onClick={handleForgotPassword}>Forgot Password?</button>
              }
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default AccountNav;
