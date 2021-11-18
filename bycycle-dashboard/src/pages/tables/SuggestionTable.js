import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
import CreateSuggestion from "../../components/Layout/CreateSuggestion";
// components
import PageTitle from "../../components/PageTitle";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  tableOverflow: {
    overflow: "auto",
  },
}));

export default function SuggestionTable() {
  const [suggestions, Setsuggestions] = useState([]);
  var suggestionTable = suggestions.map(function (obj) {
    return Object.keys(obj)
      .sort()
      .map(function (key) {
        return obj[key];
      });
  });
  const getAllsuggestions = () => {
    axios
      .get(`https://bycyclethesis.herokuapp.com/suggestion`)
      .then((response) => {
        Setsuggestions(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getAllsuggestions();
  }, []);

  return (
    <>
      <PageTitle title="Suggestions" />
      <Grid container spacing={4}>
        <CreateSuggestion></CreateSuggestion>
        <Grid item xs={12}>
          <MUIDataTable
            title="Suggestions List"
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
      </Grid>
    </>
  );
}
