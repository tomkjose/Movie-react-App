import React, { useEffect, useState } from "react";
import "../styles/form.css";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useAuth } from "../provider/AuthProvider";
import Loading from "../component/Loading";
import { updateProfile } from "../api";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [localState, setLocalState] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
  });

  useEffect(() => {
    if (user) {
      setLocalState({
        email: user.email || "",
        username: user.username || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        address: user.address || "",
        city: user.city || "",
        country: user.country || "",
      });
    }
    // else {
    //   navigate("/");
    // }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const userId = user._id;
    // console.log("user._id", user._id);

    // updateProfile({ userId, ...localState });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalState({
      ...localState,
      [name]: value,
    });
  };

  return (
    <div className="profile">
      <div className="header-section">Profile</div>
      {user ? (
        <form className="form" method="POST" onSubmit={handleUpdate}>
          <TextField
            required
            id="outlined-required"
            label="Email"
            name="email"
            value={localState.email}
            onChange={handleInputChange}
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
            name="username"
            value={localState.username}
            onChange={handleInputChange}
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
          <div style={{ display: "flex", gap: "1rem" }}>
            <TextField
              id="outlined-required"
              label="First name"
              name="firstName"
              value={localState.firstName}
              onChange={handleInputChange}
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
              id="outlined-required"
              label="Last name"
              name="lastName"
              value={localState.lastName}
              onChange={handleInputChange}
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
          </div>
          <TextField
            id="outlined-required"
            label="Address"
            name="address"
            value={localState.address}
            onChange={handleInputChange}
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
            id="outlined-required"
            label="City"
            name="city"
            value={localState.city}
            onChange={handleInputChange}
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
            id="outlined-required"
            label="Country"
            name="country"
            value={localState.country}
            onChange={handleInputChange}
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
            Update
          </Button>
        </form>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Profile;
