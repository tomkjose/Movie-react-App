import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../styles/form.css";
import { Link } from "react-router-dom";
function SignIn() {
  return (
    <div>
      <form className="form">
        <div className="header">Sign In</div>
        <TextField
          required
          id="outlined-required"
          label="Email"
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
