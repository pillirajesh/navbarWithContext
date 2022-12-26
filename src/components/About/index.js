// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div
          className={
            isDarkTheme ? 'about-container background-color' : 'about-container'
          }
        >
          <Navbar />
          <div className="about-image-container">
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="about-icon"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="about-icon"
              />
            )}
          </div>
          <h1
            className={isDarkTheme ? 'home-heading heading1' : 'home-heading'}
          >
            About
          </h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
