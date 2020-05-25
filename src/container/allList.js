import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

export default class AllList extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
}

  delete (){
    axios.delete(`http://localhost:8000/track${this.props.obj.id}`)
        .then(res => {
          this.props.history.push('/list');
          window.location.reload();
        })
        .catch(err => console.log(err))
}
  render() {
    if (!sessionStorage.getItem('data')){
      return (
      <Redirect to={'/'}/>
      )
    }
    return (
      <tr>
          <td>
            {this.props.obj.start}
          </td>
          <td>
            {this.props.obj.transit}
          </td>
          <td>
            {this.props.obj.destination}
          </td>
          <td>
            {this.props.obj.track_number}
          </td>
          <td>
            {this.props.obj.owner}
          </td>
          <td>
            {this.props.obj.address}
          </td>
          <td>
            {this.props.obj.phone}
          </td>
          <td>
            {this.props.obj.Id_document}
          </td>
          <td>
            {this.props.obj.email}
          </td>
          <td>
            {this.props.obj.agent}
          </td>
          <td>
            {this.props.obj.sender}
          </td>
          <td>
            {this.props.obj.arrived}
          </td>
          <td>
            <Link to={`/edit/${this.props.obj.id}`} className="btn btn-primary">+</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">X</button>
          </td>
        </tr>
    )
  }
}
