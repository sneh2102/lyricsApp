import React, { Component } from "react";
import { Consumer } from "../../Context";
import Spinner from "../layouts/Spinner";
import Track from "../tracks/Track";
import './Tracks.css'
class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          console.log(value);
          const { track_list, heading } = value;

          if (track_list === undefined || track_list.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h3 className="text mb-4 ctext">{heading}</h3>
                <div className="line"></div>
                <div className="row">
                  {track_list.map((item) => (
                    <Track key={item.track.track_id} track={item.track} />
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Tracks;
