import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  buttonfunction = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }

  render() {
    const {isDarkMode} = this.state
    const buttonContent = isDarkMode ? 'Light Mode' : 'Dark Mode'
    const cardClass = isDarkMode ? 'dark-card' : 'light-card'

    return (
      <div className="bg-container">
        <div className={`card ${cardClass}`}>
          <h1 className="heading">CLick To Change Mode</h1>
          <button
            className="button"
            type="button"
            onClick={this.buttonfunction}
          >
            {buttonContent}
          </button>
          <p className="footer">Code by Manjunath_DK</p>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
