import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Edit extends Component {
  state = {
    start : '' ,
    transit : '',
    destination : '' ,
    track_number : '',
    owner : '' ,
    address : '',
    phone : '' ,
    Id_document : '',
    email : '' ,
    agent : '',
    sender : '' ,
    arrived : '',
    parcel_description: '',
    id: ''
 };

 componentDidMount() {
   this.getTrack();
 }

 getTrack = () => {
   const id = this.props.match.params.id
  axios.get(`https://5d245031e39785001406ecde.mockapi.io/track/${id}`)
      .then(res => {
        this.setState({
          id: res.data.id,
          start : res.data.start ,
          transit : res.data.transit,
          destination : res.data.destination ,
          track_number : res.data.track_number,
          owner : res.data.owner ,
          address : res.data.address,
          phone : res.data.phone ,
          Id_document : res.data.Id_document,
          email : res.data.email,
          agent : res.data.agent,
          sender : res.data.sender,
          arrived : res.data.arrived,
          parcel_description: res.data.parcel_description
       });
       console.log('response', res.data)
      })
      .catch(function (error) {
          console.log(error);
      })
}

 onChange = (event)=> {
  this.setState({
      [event.target.name] : event.target.value

  });
}

editTicket = (newTicket) => {
  axios.request({
    method:'put',
    url:`https://5d245031e39785001406ecde.mockapi.io/track/${this.props.match.params.id}`,
    data: newTicket
  }).then(res => {
    console.log(res)
    this.props.history.push('/list');
  }).catch(err => console.log(err));
}

onSubmit = (event) => {
  event.preventDefault();

  const newTicket = {
    start : event.target.start.value ,
    transit : event.target.transit.value,
    destination : event.target.destination.value,
    track_number : event.target.track_number.value,
    owner : event.target.owner.value,
    address : event.target.address.value,
    phone : event.target.phone.value,
    Id_document : event.target.Id_document.value,
    email : event.target.email.value,
    agent : event.target.agent.value,
    sender : event.target.sender.value,
    arrived : event.target.arrived.value,
    parcel_description: event.target.parcel_description.value
  };
  this.editTicket(newTicket)

//   axios.put(`https://5d245031e39785001406ecde.mockapi.io/track/${this.state.id}`,data)
//   .then((response) => {
//     this.props.history.push('/list')
//   }).catch(err => console.log(err))
//   this.setState({
//     start : '' ,
//     transit : '',
//     destination : '' ,
//     track_number : '',
//     owner : '' ,
//     address : '',
//     phone : '' ,
//     Id_document : '',
//     email : '' ,
//     agent : '',
//     sender : '' ,
//     arrived : '',
//     parcel_description: ''
//  });
}

  render() {
    if (!sessionStorage.getItem('data')){
      return (
      <Redirect to={'/'}/>
      )
    }
    return (
      <div className="container col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center" style={{ marginTop: 10 }}>
            <h3 align="center" style={{ marginTop: 10 }}>New Parcel Tracking</h3>
            <form onSubmit={this.onSubmit} className="form">
                <div className="form-group">
                    <input
                      type="text"
                      name="start"
                      className="form-control"
                      value={this.state.start}
                      onChange={this.onChange}
                      placeholder="Dispatch Country"
                      />
                </div>
                <div className="form-group">
                    <input type="text"
                      name="transit"
                      className="form-control"
                      value={this.state.transit}
                      onChange={this.onChange}
                      placeholder="Transit Country"
                      />
                </div>
                <div className="form-group">
                    <input type="text"
                      name="destination"
                      className="form-control"
                      value={this.state.destination}
                      onChange={this.onChange}
                      placeholder="Destination"
                      />
                </div>
                <div className="form-group">
                    <input type="text"
                      name="track_number"
                      className="form-control"
                      value={this.state.track_number}
                      onChange={this.onChange}
                      placeholder="Tracking Number"
                      />
                </div>
                <div className="form-group">
                    <input type="text"
                      name="owner"
                      className="form-control"
                      value={this.state.owner}
                      onChange={this.onChange}
                      placeholder="Parcel Owner"
                      />
                </div>
                <div className="form-group">
                    <input type="text"
                      name="address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.onChange}
                      placeholder="Parcel Owner Address"
                      />
                </div>
                <div className="form-group">
                    <input type="text"
                      name="phone"
                      className="form-control"
                      value={this.state.phone}
                      onChange={this.onChange}
                      placeholder="Parcel Owner Phone Number"
                      />
                </div>
                <div className="form-group">
                    <input type="text"
                      name="Id_document"
                      className="form-control"
                      value={this.state.Id_document}
                      onChange={this.onChange}
                      placeholder="Parcel Owner ID Document"
                      />
                </div>
                <div className="form-group">
                    <input type="text"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.onChange}
                      placeholder="Parcel Owner Email"
                      />
                </div>
                <div className="form-group">
                    <input type="text"
                      name="agent"
                      className="form-control"
                      value={this.state.agent}
                      onChange={this.onChange}
                      placeholder="Courier Agent"
                      />
                </div>
                <div className="form-group">
                    <input type="text"
                      name="parcel_description"
                      className="form-control"
                      value={this.state.parcel_description}
                      onChange={this.onChange}
                      placeholder="Parcel Description"
                      />
                </div>
                <div className="form-group">
                    <input type="text"
                      name="sender"
                      className="form-control"
                      value={this.state.sender}
                      onChange={this.onChange}
                      placeholder="Parcel Sender"
                      />
                </div>
                <div className="form-group">
                    <input type="text"
                      name="arrived"
                      className="form-control"
                      value={this.state.arrived}
                      onChange={this.onChange}
                      placeholder="Parcel Status ? Yes OR No"
                      />
                </div>
                <div className="form-group">
                    <input type="submit"
                      value="Edit Record"
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}
