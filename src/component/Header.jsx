import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/kill" className="btn btn-ghost text-xl">
            <li>KILL-APP</li>
          </Link>
          <Link to="/loop" className="btn btn-ghost text-xl">
            <li>SCALE-OUT</li>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>move</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link to="/">
                      <li>home</li>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
