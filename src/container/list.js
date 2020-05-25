import React, { Component } from 'react'
import axios from 'axios';
import AllList from './allList';
import { Redirect } from 'react-router-dom';


export default class List extends Component {
  state = {track: []};

  componentDidMount(){
    axios.get('http://localhost:8000/track')
      .then(response => {
        this.setState({ track: response.data });
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  tabRow(){
    return this.state.track.map(function(object, i){
        return <AllList obj={object} key={i} />;
    });
  }

  render() {
    if (!sessionStorage.getItem('data')){
      return (
      <Redirect to={'/'}/>
      )
    }
    return (
      <div className='table-responsive'>
        <table className="table " style={{ marginTop: 20, margin: '20px' }}>
          <thead>
            <tr>
              <th scope="col">Dispatch</th>
              <th scope="col">Destination</th>
              <th scope="col">Transit</th>
              <th scope="col">Tracking Number</th>
              <th scope="col">Parcel Owner</th>
              <th scope="col">Owner Address</th>
              <th scope="col">Owner Phone</th>
              <th scope="col">Id Document</th>
              <th scope="col">Owner Email</th>
              <th scope="col">Agent</th>
              <th scope="col">Sender</th>
              <th scope="col">Arrival</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            { this.tabRow() }
          </tbody>
        </table>
      </div>
    )
  }
}
