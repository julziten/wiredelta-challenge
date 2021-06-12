import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { apiKey } from "../keys/apiKey";


// Note: create and replace your own key in the Google console.

export const MyMapComponent = compose(
  withProps({
    googleMapURL:
      `https://maps.googleapis.com/maps/api/js?key= ${apiKey} &v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px', filter: 'grayscale(40%)' }} />,
    mapElement: <div style={{ height: '100%' }} />
  }),
  withScriptjs,
  withGoogleMap
) (props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -8.409518, lng: 115.188919 }}>
    {props.isMarkerShown && (
      <Marker position={{ lat: -8.409518, lng: 115.188919 }} />
    )}
  </GoogleMap>
));