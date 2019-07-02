import './style.scss';
import React from 'react';
import GoogleAuth from '../GoogleAuth';

const Register = () => {
  return (
    <div className="Register">
      <h1 className="Register__header">Register</h1>
      <form className="Register__form" action="#">
        <input
          className="Register__input"
          type="text"
          placeholder="Your phone or email"
        />
      </form>

      <p className="Register__description">
        You will receive a 4-digit code to use as password. You can change it in
        your account settings
      </p>
      <p className="Register__text">or</p>
      <GoogleAuth />
      <form action="#">
        <input className="Register__checkbox" type="checkbox" id="terms" />
        <label className="Register__label" htmlFor="terms">
          I have read and agree with the <span className="Register__terms-link">Terms and Conditions</span>
        </label>
      </form>
      <div className="Register__footer">
        <span className="Register__footer-login">Log in</span>
        <button className="Register__footer-register">Register</button>
      </div>
    </div>
  );
};

export default Register;
