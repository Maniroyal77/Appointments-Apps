import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {title: '', date: new Date(), appointmentList: []}

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({
      date: event.target.value,
    })
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    console.log(date)
    const newAppointment = {
      id: v4(),
      title,
      date: format(new Date(date), 'dd MMMM yyyy, EEEE'),
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  clickStar = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  onClickStarred = () => {
    const {appointmentList} = this.state

    this.setState({
      appointmentList: appointmentList.filter(
        eachAppointment => eachAppointment.isStarred === true,
      ),
    })
  }

  render() {
    const {title, date, appointmentList} = this.state
    return (
      <div className="bg">
        <div className="main-card">
          <div className="input-container">
            <div>
              <h1>Add Appointments</h1>
              <form className="form-container" onSubmit={this.onAddAppointment}>
                <label htmlFor="Title">TITLE</label>
                <input
                  className="input"
                  placeholder="Title"
                  id="Title"
                  type="search"
                  onChange={this.onChangeTitle}
                  value={title}
                />
                <label htmlFor="date">DATE</label>
                <input
                  className="input"
                  id="date"
                  type="date"
                  onChange={this.onChangeDate}
                  value={date}
                />
                <button className="submit-button" type="submit">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointment-image"
            />
          </div>
          <hr className="line" />
          <div className="starred-card">
            <h1 className="heading">Appointments</h1>
            <div>
              <button
                onClick={this.onClickStarred}
                className="starred-button"
                type="button"
              >
                Starred
              </button>
            </div>
          </div>
          <ul className="item-card">
            {appointmentList.map(eachAppointment => (
              <AppointmentItem
                key={eachAppointment.id}
                appointmentDetails={eachAppointment}
                clickStar={this.clickStar}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
