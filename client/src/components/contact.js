import React, { Component } from 'react'

export default class Contact extends Component {
  state = {
  contacts : []
  }
componentDidMount() {
fetch('http://localhost:4000/api/contacts')
  .then((response)=> {
    return response.json();
  }).then( (contacts)=> {
    this.setState({ contacts });
  }).catch(err=>console.log(err));
}
  deleteContact = (id) => {
  fetch(`http://localhost:4000/api/contact/${id}`, {
    method: 'DELETE'
  }).then(response => response.json()).then(data => {
    const contacts = this.state.contacts.filter(contact => contact._id !== id)
    return this.setState({ contacts });
  }).catch(err => console.log(err));
}

  render() {
    return (
      <div className="container">
    {this.state.contacts.length === 0 && 'No Contact Available'}
    <div className="row col-md-12  custyle">
      <table className="table table-striped custab">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th className="text-center">Action</th>
          </tr>
            </thead>
            {this.state.contacts.map((contact, index) => {
              return (
                <tbody key={contact._id}>
                  <tr>
                    <td>{index}</td>
                    <td>{contact.firstName}</td>
                    <td>{contact.lastName}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.address}</td>
                    <td className="text-center">
                      <button className="btn btn-danger btn-xs"
                        onClick={() => this.deleteContact(contact._id)}>
                        Delete
              </button>
                    </td>
                  </tr>
                </tbody>
              )

            })
            }
      </table>
    </div>
  </div>
    )
  }
}
