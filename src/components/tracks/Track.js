import React from 'react'
import {Link}  from 'react-router-dom';
import './Track.css';

 const Track =(props)=> {
     const { track }=props;
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body ">
            <h5>{track.artist_name}</h5>
            <p className="card-text ">
            <i className="fas fa-play" /><strong> Track: </strong>{track.track_name}
                <br/>
                <i className="fas fa-compact-disc" /> <strong> Album: </strong>{track.album_name}
            </p>
            <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block but"> View Lyrics
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Track;
