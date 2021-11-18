import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

function CreateStation() {
  const [Station, SetStation] = useState({
    Name: "",
    Email: "",
    Situation: "",
    Incoming: "",
    City: "",
    Status: "",
    BikeCount: "",
  });

  function handleChangeStation(e) {
    e.persist();
    const { name, value } = e.target;
    SetStation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <Box>
      <h3> Create Station</h3>
      <TextField
        onChange={handleChangeStation}
        name="Name"
        placeholder="Name"
      ></TextField>
      <TextField
        type="number"
        onChange={handleChangeStation}
        name="BikeCount"
        placeholder="number of bikes"
      ></TextField>
      <TextField
        onChange={handleChangeStation}
        name="Situation"
        placeholder="Situation"
      ></TextField>
      <TextField
        onChange={handleChangeStation}
        name="Incoming"
        placeholder="Incoming"
      ></TextField>
      <TextField
        onChange={handleChangeStation}
        name="Status"
        placeholder="Status"
      ></TextField>
      <TextField
        onChange={handleChangeStation}
        name="City"
        placeholder="City"
      ></TextField>
      <TextField
        onChange={handleChangeStation}
        name="Email"
        placeholder="Email"
      ></TextField>
      <Button
        onClick={() => {
          axios
            .post("http://localhost:3000/station", Station)
            .then((result) => {
              console.log("station created", result.data);
            })
            .then(() => {
              window.location.reload();
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        {/* here i will send the station object to the database */}
        {/* I still need to handle the type of bikes number */}
        Create
      </Button>
    </Box>
  );
}

export default CreateStation;
