import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../styles/form.css";
import { Link } from "react-router-dom";
import { userLogin } from "../api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, login, logout } = useAuth();
  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    const response = await login(email, password);
    setLoading(false);
    if (response) {
      navigate("/");
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <form className="form" onSubmit={handleLogin} method="POST">
        <div className="header">Sign In</div>
        <TextField
          required
          id="outlined-required"
          label="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            width: "100%",
            "& label": {
              color: "white",
            },
            "& .MuiInputBase-input": {
              color: "white",
            },
            "& fieldset": {
              borderColor: "white",
            },
            "&:focus": {
              "& fieldset": {
                borderColor: "white",
              },
            },
          }}
        />

        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            width: "100%",
            "& label": {
              color: "white",
            },
            "& .MuiInputBase-input": {
              color: "white",
            },
            "& fieldset": {
              borderColor: "white",
            },
            ":hover": {
              borderColor: "white",
            },
          }}
        />
        <Button
          variant="outlined"
          type="submit"
          sx={{
            color: "#df3a3a",
            width: "100%",
            borderColor: "#df3a3a",
            ":hover": {
              bgcolor: "#df3a3a",
              color: "white",
              borderColor: "#df3a3a",
            },
          }}
        >
          Login
        </Button>
      </form>

      <p className="message">
        {" "}
        Create new Account?{" "}
        <Link to="/signup" style={{ color: "#df3a3a" }}>
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default SignIn;
