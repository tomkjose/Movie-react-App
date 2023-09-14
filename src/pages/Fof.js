import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
function Fof() {
  return (
    <div className="fof">
      <h1 className="fof-heading">404</h1>
      <Button
        variant="contained"
        sx={{ backgroundColor: "red", color: "white" }}
      >
        {" "}
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
}

export default Fof;
