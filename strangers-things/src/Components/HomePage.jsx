import React from "react";
import { Link } from "react-router-dom";
import { loginUser } from '../API';

function HomePage() {
  return (
    <div>
      <h1>Stranger's Things: A place to buy and sell gently used items!</h1>
      <button>
        <Link to="/login">Login</Link>
      </button>
      <br></br>
      <h3> New to Stranger's Things?</h3>
      <button>
        <Link to="/register">Register here!</Link>
        <br></br>
      </button>
    </div>
  );
}

export default HomePage;
