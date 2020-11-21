import React, { Fragment } from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
  return(
    <Fragment>
      <header>
        <div className={styles.logo}><h2>Sachait</h2></div>
          <nav>
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>FAQ</li>
            </ul>
          </nav>
          <div className={styles.btn}><button><a href="http://localhost:5500/">Enter</a></button></div>
      </header>
    </Fragment>
  )
}

export default Navbar;