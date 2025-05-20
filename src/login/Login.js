import React from 'react';
import Login, { Render } from 'react-login-page';
import Logo from 'react-login-page/logo';
import './Login.css';
import LoginIcon from './logo/login.png'

const Demo = () => {
  return (
    <Login>
      <Render>
        {({ fields, buttons, blocks }) => {
          return (
            <div className="login-wrapper">
              <div className="login-box">
                <header>
                  <img src={LoginIcon} alt="Login Logo" style={{ height: '100px', width: '200px' }} />
                </header>
                <div>
                  <label>{fields.username}</label>
                </div>
                <div>
                  <label>{fields.password}</label>
                </div>
                <div className="button-container">
                  {buttons.submit}
                  {buttons.reset}
                </div>
              </div>
            </div>
          );
        }}
      </Render>
      <Login.Block keyname="logo" tagName="span">
        <Logo />
      </Login.Block>
      <Login.Block keyname="title" tagName="span">
        Login
      </Login.Block>
      <Login.Input keyname="username" placeholder="Please input Username" />
      <Login.Input keyname="password" placeholder="Please enter Password" />
      <Login.Button keyname="submit" type="submit">
        Submit
      </Login.Button>
      <Login.Button keyname="reset" type="reset">
        Reset
      </Login.Button>
    </Login>
  );
};

export default Demo;
