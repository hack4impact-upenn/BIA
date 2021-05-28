import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Colors from '../common/Colors';
import { AuthContext } from '../context';

const NavBarItems = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Avatar = styled.img`
  display: inline;
  width: 70px;
  height: 70px;
  margin: 0 auto;
  margin-left: 10px;
  background: black;
  border-radius: 50%;
  border: 2px solid white;
`;

//Might add this component later. Keep it for now because the login/register control might be useful.

function Navbar() {
  const auth = useContext(AuthContext);
  const history = useHistory();

  async function handleLogout() {
    await auth.logout();
  }

  return (
    <nav
      className="navbar"
      style={{ background: `${Colors.white}`, height: '80px' }}
    >
      <div className="container">
        <div className="navbar-brand" style={{ position: 'relative' }}>
          <a href="/" style={{ position: 'relative' }}>
            <Avatar src={process.env.PUBLIC_URL + '/img/BIA.jpeg'} />
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            {auth.isAuthenticated ? (
              <NavBarItems
                className="navbar-item"
                onClick={() => handleLogout()}
              >
                Logout
              </NavBarItems>
            ) : (
              <>
                <Link to="/login" className="navbar-item">
                  Login
                </Link>
                <Link to="/register" className="navbar-item">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
