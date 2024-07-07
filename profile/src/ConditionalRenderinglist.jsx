import React from "react";
import "./App.css";
const ConditionalRenderinglist = () => {
  return (
    <div>
      <Header></Header>
      {isAdmin && <Admin> </Admin>}
    </div>
  );
};
let LoggedIn = false;
const isAdmin = false;
function Header() {
  return (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact Us</li>
      {LoggedIn ? <li>Logout</li> : <li>Login</li>}
    </ul>
  );
}

function Admin() {
  return <h1>This is Admin DashBoard</h1>;
}
export default ConditionalRenderinglist;
