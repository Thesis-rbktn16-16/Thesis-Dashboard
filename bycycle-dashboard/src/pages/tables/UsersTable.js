import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
import CreateSuggestion from "../../components/Layout/CreateSuggestion";

import axios from "axios";
// components
import PageTitle from "../../components/PageTitle";
const useStyles = makeStyles((theme) => ({
  tableOverflow: {
    overflow: "auto",
  },
}));

export default function SuggestionTable() {
  const [Users, SetUsers] = useState([]);
  var suggestionTable = Users.map(function (obj) {
    return Object.keys(obj)
      .sort()
      .map(function (key) {
        return obj[key];
      });
  });
  const getAllUsers = () => {
    axios
      .get(`https://bycyclethesis.herokuapp.com/user/data`)
      .then((response) => {
        SetUsers(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <PageTitle title="Users" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Users List"
            data={suggestionTable}
            columns={[
              "Incidents",
              "ID",
              "Created at",
              "Description",
              "Distance",
              "Duration",
              "Location",
              "PhotoUrl",
            ]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
        <CreateSuggestion></CreateSuggestion>
      </Grid>
    </>
  );
}
