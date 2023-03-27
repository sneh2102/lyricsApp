// import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

//   function Lyrics()  {
//     const state ={
//       track:{},
//       lyrics:{}
//     }
//     const p = useParams();
//   useEffect(() => {
//     axios.get(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${p.id}&apikey=369d7dc11810e3bb41aed243be41e111`)
//     .then(res=>{
//       console.log(res.data);
//       state.lyrics=res.data.message.body.lyrics;
//       return   axios.get(`https://api.musixmatch.com/ws/1.1/track.get?track_id=${p.id}&apikey=369d7dc11810e3bb41aed243be41e111`)
//       .then(res=>{
//         state.track=res.data.message.body.track;
//         // console.log(state.track);
//       })
//     })
//     .catch(err=>console.log(err));;
// });
// console.log(state.track);
//     return (
//       <>
//       <div>
//         <h1>{state.track.track_id}</h1>
//       </div>
//       </>
//     );
//   }

// export default Lyrics;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import './Lyrics.css';

const Lyrics = () => {
  const track_id  = useParams();
  const [genre, setGenre] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [track, setTrack] = useState('');
  

  useEffect(() => {
    const fetchLyrics = async () => {
      const response = await axios.get(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${track_id.id}&apikey=369d7dc11810e3bb41aed243be41e111`)
      setLyrics(response.data.message.body.lyrics);
    };
    const fetchTrack = async () => {
      const response = await axios.get(`https://api.musixmatch.com/ws/1.1/track.get?track_id=${track_id.id}&apikey=369d7dc11810e3bb41aed243be41e111`)
      setTrack(response.data.message.body.track);
      setGenre(response.data.message.body.track.primary_genres.music_genre_list[0].music_genre.music_genre_name);
    };
    fetchLyrics();
    fetchTrack();
   
  }, [track_id]);
  // console.log(track);
    return (
      <>
      <Link to="/" className="btn btn-dark mb-4">Go Back</Link>
      <div className="card">
        <h5 className="card-header">
          {track.track_name} by {track.artist_name}
        </h5>
        <div className="card-body">
          <p className="card-text">
            {lyrics.lyrics_body}
          </p>
        </div>
      </div>
      <ul className="list-group bg-dark ">
        <li className="list-group-item list" >
          <strong>Album ID</strong>: {track.album_id}
        </li>
        <li className="list-group-item list">
          <strong>Song Genre</strong>: {genre}
        </li>
        <li className="list-group-item list">
          <strong>Explicit Words</strong>: {track.explicit===0?'No':'Yes'}
        </li>
        <li className="list-group-item list">
          <strong>Rating</strong>: {track.track_rating}
        </li>
        

      </ul>
      </>
  );
}


export default Lyrics;
