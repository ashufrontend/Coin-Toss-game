import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: HEADS_IMG_URL, headsCount: 0, tailsCount: 0}

  onClickTossButton = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (tossResult === 0) {
      tossImage = HEADS_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImage = TAILS_IMG_URL
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-or-tails">Heads (or) tails</p>
          <img src={tossResultImage} alt="toss result" className="toss" />

          <button
            type="button"
            className="button"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>
          <div className="total-count-container">
            <p className="total">Total: {totalCount} </p>

            <p className="total">Heads: {headsCount} </p>

            <p className="total">Tails: {tailsCount} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
