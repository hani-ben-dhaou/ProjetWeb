import React from 'react';
import { Link } from 'react-router-dom';
import LogImage from "../images/295128.png";
import "../Styles/Login.css";

export default function Login() {
  return (
    <div className="LogBody">
      <h1 className="log-heading">LOGIN</h1>
      <div className="form">
        <img className="login-img" src={LogImage} alt='login_image' height={150} />
        <form>
          <div className="mb-3">
            <table>
              <tbody>
                <tr>
                  <td><label className="form-label">Name</label></td>
                  <td><input type="text" className="form-control" placeholder='name' required autoFocus /></td>
                </tr>
                <tr>
                  <td><label htmlFor="exampleInputPassword1" className="form-label">Password</label></td>
                  <td><input type="password" className="form-control" id="exampleInputPassword1" placeholder='password' required /></td>
                </tr>
                <tr>
                  <td colSpan={2}><center><button type="submit" className="btn btn-primary">Login</button></center></td>
                </tr>
                <tr>
                  <td colSpan={2}><Link to="/inscription">Inscription</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
}
