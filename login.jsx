import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("Login Successful!");
  };

  return (
    <div className="page">

      <div className="container">

        <h2>Login</h2>

        <form onSubmit={handleLogin}>

          <label>Name</label>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        {message && (
          <p className="success">
            {message}
          </p>
        )}

        <p>Don't have an account?</p>

        <Link to="/registration">
          <button type="button">
            Register
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Login;