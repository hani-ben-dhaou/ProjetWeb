import React from 'react';
import "../Styles/Login.css";

export default function Inscription() {
  return (
    <div className="LogBody">
      <h1 className="log-heading">INSCRIPTION</h1>
      <div className="form">
        <form action="register.php" method="POST">
          <div className="mb-3">
            <table>
              <tbody>
                <tr>
                  <td><label className="form-label">Name</label></td>
                  <td><input type="text" className="form-control" name="name" /></td>
                </tr>
                <tr>
                  <td><label className="form-label">Email</label></td>
                  <td><input type="email" className="form-control" name="email" /></td>
                </tr>
                <tr>
                  <td colSpan={2}><center><input type="submit" className="btn btn-primary" value="Submit" /></center></td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
}
