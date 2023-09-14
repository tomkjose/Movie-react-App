import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/form.css";
import { userSignup } from "../api";
import { useNavigate } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    setLoading(true);
    e.preventDefault();
    const response = await userSignup(username, email, password);
    console.log("response", response);

    setLoading(false);
    // console.log(response.error.message);
    if (response.status === 201) navigate("/signin");
    setUsername("");
    setEmail("");
    setPassword("");
  };
  if (user) {
    navigate("/");
  }
  return (
    <div>
      <div>
        <form className="form" method="POST" onSubmit={handleSignUp}>
          <div className="header-section">Sign Up</div>
          <TextField
            required
            id="outlined-required"
            label="Username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
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
            type="submit"
          >
            Sign Up
          </Button>
        </form>

        <p className="message">
          {" "}
          Already have an account?{" "}
          <Link to="/signin" style={{ color: "#df3a3a" }}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
