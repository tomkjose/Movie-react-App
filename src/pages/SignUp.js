import { Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/form.css";
function SignUp() {
  return (
    <div>
      <div>
        <form className="form">
          <div className="header">Sign Up</div>
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
            id="outlined-required"
            label="Username"
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
            type="submit"
          >
            Login
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
