import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-1">
          <label>User Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name" required
          />
        </div>
        
        <div className="mb-1">
          <label>Email Address</label>
          <input
            type="email"
            className="form-control" 
            placeholder="Enter email" required
          />
        </div>
        
        <div className="mb-1">
          <label>Dob</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Date of birth" required
          />
        </div>
        <div className="mb-1">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password" required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-dark">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}