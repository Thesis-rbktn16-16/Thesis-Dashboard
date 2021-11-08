import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

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
      .get(`http://localhost:3002/suggestion`)
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
      <PageTitle title="suggestions" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="suggestion List"
            data={suggestionTable}
            columns={[
              "To be removed",
              "Location",
              "Created at",
              "Description",
              "Distance",
              "Duration",
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