import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import CreateBicycle from "../../components/Layout/CreateBicycle";

// components
import PageTitle from "../../components/PageTitle";
import axios from "axios";
// const useStyles = makeStyles((theme) => ({
//   tableOverflow: {
//     overflow: "auto",
//   },
// }));

export default function BicycleTable() {
  const [Bicycles, SetBicycles] = useState([]);
  var bicycleTable = Bicycles.map(function (obj) {
    return Object.keys(obj)
      .sort()
      .map(function (key) {
        return obj[key];
      });
  });
  const getAllBicycles = () => {
    axios
      .get(`https://bycyclethesis.herokuapp.com/bicycle`)
      .then((response) => {
        SetBicycles(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getAllBicycles();
  }, []);

  return (
    <>
      <PageTitle title="Bicycles" />
      <Grid container spacing={2}>
        <CreateBicycle></CreateBicycle>
        <Grid item xs={12}>
          <MUIDataTable
            title="Bicycle List"
            data={bicycleTable}
            columns={[
              "Incident",
              "Bike Id",
              "Category",
              "Purchase Date",
              "Description",
              "photo",
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
