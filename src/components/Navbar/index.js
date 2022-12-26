// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const changeTheme = () => {
        toggleTheme()
      }

      return (
        <nav
          className={
            isDarkTheme ? 'navbar-container change-color' : 'navbar-container'
          }
        >
          <div className="navbar-items-container">
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="logo"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="logo"
              />
            )}
            <ul className="link-container">
              <Link to="/" className={isDarkTheme ? 'link color' : 'link'}>
                <li>Home</li>
              </Link>
              <Link to="/about" className={isDarkTheme ? 'link color' : 'link'}>
                <li>About</li>
              </Link>
            </ul>
            <button className="button" type="button" onClick={changeTheme}>
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="logo"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="logo"
                />
              )}
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
