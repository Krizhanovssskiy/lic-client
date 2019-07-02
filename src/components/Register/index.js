import './style.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registration } from '../../actions';

import GoogleAuth from '../GoogleAuth';

class Register extends Component {
  state = { contact: '', isAgree: false };

  onInputChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();

    if (this.state.isAgree) {
      this.props.registration(this.state.contact);
    } else {
      console.log('check the checkbox');
    }
  };

  render() {
    return (
      <div className="Register">
        <h1 className="Register__header">Register</h1>
        <form onSubmit={this.onFormSubmit} className="Register__form">
          <input
            name="contact"
            onChange={this.onInputChange}
            value={this.state.contact}
            className="Register__input"
            type="text"
            placeholder="Your phone or email"
          />
          <p className="Register__description">
            You will receive a 4-digit code to use as password. You can change
            it in your account settings
          </p>
          <p className="Register__text">or</p>

          <input
            name="isAgree"
            onChange={this.onInputChange}
            checked={this.state.isAgree}
            className="Register__checkbox"
            type="checkbox"
            id="terms"
          />
          <label className="Register__label" htmlFor="terms">
            I have read and agree with the{' '}
          </label>
          <span className="Register__terms-link">Terms and Conditions</span>
          <div className="Register__footer">
            <span className="Register__footer-login">Log in</span>
            <button type="submit" className="Register__footer-register">
              Register
            </button>
          </div>
        </form>
        <hr />
        <GoogleAuth />
      </div>
    );
  }
}

export default connect(
  null,
  { registration }
)(Register);
