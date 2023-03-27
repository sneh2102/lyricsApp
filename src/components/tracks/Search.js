import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../Context";
import Track from "./Track";
import './Search.css';
class Search extends Component {
  state = {
    track_title: "",

  };

  findTrack=(dispatch,e)=>{
    e.preventDefault();
    
    axios.get(`https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.track_title}&page_size=3&page=1&s_track_rating=desc&apikey=369d7dc11810e3bb41aed243be41e111`)
        .then(res=>{
         dispatch({
            type: 'SEARCH_TRACKS',
            payload: res.data.message.body.track_list
         });
        })
        .catch(err=>console.log(err));
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch }=value;
          // console.log(value);
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="diplay-4 text-center">Search For A Song</h1>
              <p className="lead text-center">Get the lyrics for any song</p>
              <form onSubmit={this.findTrack.bind(this,dispatch)}>
                <div className="search-container">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Song Title....."
                    name="track_title"
                    value={this.state.track_title}
                    onChange={this.onChange.bind(this)}
                  />
                 <button type="submit">
    <i className="fa fa-search"></i>
  </button>
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Search;
