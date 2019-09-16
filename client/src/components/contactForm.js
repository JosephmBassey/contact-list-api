import React, { Component } from 'react'

export default class ContactForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
    }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:4000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then((res) => res.json())
      .then((data) =>{
        this.props.history.push('/contact')
  }
    ).catch((err) => alert(err))
}

  render() {
    return (
    <div className="container">
        <h2 className="text-center">Contact Form </h2>
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-6 pb-5">
        <form id="contactForm" onSubmit={this.handleSubmit}>
          <div className="card border-primary rounded-0">
            <div className="card-header p-0">
              <div className="bg-info text-white text-center py-2">
                <p className="m-0">Contact Form </p>
              </div>
            </div>
            <div className="card-body p-3">

              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                  </div>
                      <input type="text" className="form-control" id="firstName" name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        placeholder="First Name" />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                  </div>
                  <input type="text" className="form-control" id="lastName" name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  placeholder="Last Name"/>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                  </div>
                  <input type="email" className="form-control" id="email" name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  placeholder="Email Address"/>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                  </div>
                      <input type="text" className="form-control" id="phone" name="phone"
                      value={this.state.phone}
                      onChange={this.handleInputChange}
                      placeholder="Phone" />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group mb-2">
                  <div className="input-group-prepend">
                  </div>
                  <textarea id="address" name="address" className="form-control"value={this.state.address}
                        onChange={this.handleInputChange} placeholder="Contact Address "></textarea>
                </div>
              </div>

              <div className="text-center">
                <input type="submit" value="submit" className="btn btn-info btn-block rounded-0 py-2"/>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  </div>
    )
  }
}
