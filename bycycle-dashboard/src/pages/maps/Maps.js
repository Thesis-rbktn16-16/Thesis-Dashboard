import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
} from "react-google-maps";

// styles
import useStyles from "./styles";

const BasicMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{
        lat: parseFloat(36.78825),
        lng: parseFloat(10),
      }}
    >
      <Marker
        position={{ lat: 36.888082, lng: 10.182544 }}
        title={"Station-1: Civil Protection"}
        description={"Station-1"}
      />
      <Marker
        position={{ lat: 36.893051, lng: 10.187858 }}
        title={"Station-2: Technopole Ghazela"}
        description={"Station-2"}
      />
      <Marker
        position={{ lat: 36.876388, lng: 10.185943 }}
        title={"Station-3: Fathi Zouhir Avenue"}
        description={"Station-3"}
      />
      <Marker
        position={{ lat: 36.900609, lng: 10.183929 }}
        title={"Station-4: Ariana Soghra"}
        description={"Station-4"}
      />
      <Marker
        position={{ lat: 36.889589, lng: 10.171335 }}
        title={"Station-5: Ghazela City"}
        description={"Station-5"}
      />
      <Marker
        position={{ lat: 36.910111, lng: 10.187838 }}
        title={"Station-6: Nour Jaafer"}
        description={"Station-6"}
      />
      <Marker
        position={{ lat: 36.884352, lng: 10.194418 }}
        title={"Station-7: Professors City"}
        description={"Station-7"}
      />
    </GoogleMap>
  )),
);

export default function Maps() {
  var classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <BasicMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB7OXmzfQYua_1LEhRdqsoYzyJOPh9hGLg"
        loadingElement={<div style={{ height: "inherit", width: "inherit" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}
