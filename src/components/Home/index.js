// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div
          className={
            isDarkTheme ? 'home-container background-color' : 'home-container'
          }
        >
          <Navbar />
          <div className="home-image-container">
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="home-icon"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="home-icon"
              />
            )}
          </div>
          <h1
            className={isDarkTheme ? 'home-heading heading1' : 'home-heading'}
          >
            Home
          </h1>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
