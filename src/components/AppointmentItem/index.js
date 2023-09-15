import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, clickStar} = props
  const {id, title, date, isStarred} = appointmentDetails

  const onClickStar = () => {
    clickStar(id)
  }

  const image = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list">
      <div className="list-card">
        <div className="title-container">
          <h1 className="title-heading">{title}</h1>
          <button
            onClick={onClickStar}
            className="star-button"
            type="button"
            data-testId="star"
          >
            <img src={image} alt="star" className="star-image" />
          </button>
        </div>
        <p className="para">{date}</p>
      </div>
    </li>
  )
}

export default AppointmentItem
