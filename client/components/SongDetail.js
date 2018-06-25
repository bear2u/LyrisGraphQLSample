import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSong from "../queries/fetchSong";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

class SongDetail extends Component {
  constructor(props) {
    super(props);
  }
  
  fetchDetail() {
    const { song } = this.props.data;    

    if (!song) {
      return <h3>Loading</h3>;
    }

    this.lyrics = song.lyrics;
    return<h3>{song.title}</h3>;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Link to="/">Back</Link>
        {this.fetchDetail()}
        <LyricList lyrics={this.lyrics} />
        <LyricCreate id={this.props.params.id} />
      </div>
    );
  }
}

export default graphql(
  fetchSong,
  {
    options: props => {
      return { variables: { id: props.params.id } };
    }
  }  
)(SongDetail);
