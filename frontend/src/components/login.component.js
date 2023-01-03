import React, { Component } from 'react'
export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Log in</h3>
        <div className="mb-1">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email" required
          />
        </div>
        <div className="mb-1">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
           required />
        </div>
        
        <div className="d-grid">
          <button type="submit" className="btn btn-dark">
            Log in
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}