import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeId: 0}

  getReview = reviewsList => {
    const {activeId} = this.state
    const {imgUrl, username, description, companyName} = reviewsList[activeId]

    return (
      <div className="li-card">
        <img src={imgUrl} alt={username} />
        <p className="user-name">{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    )
  }

  onLeft = () => {
    const {activeId} = this.state
    if (activeId > 0) {
      this.setState(prev => ({
        activeId: prev.activeId - 1,
      }))
    }
  }

  onRight = () => {
    const {reviewsList} = this.props
    const {activeId} = this.state
    if (activeId < reviewsList.length - 1) {
      this.setState(prev => ({activeId: prev.activeId + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props

    return (
      <div className="container">
        <h1 className="heading">Reviews</h1>
        <div className="inner-card">
          <button
            className="arrow-icon"
            type="button"
            onClick={this.onLeft}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.getReview(reviewsList)}
          <button
            className="arrow-icon"
            type="button"
            onClick={this.onRight}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
