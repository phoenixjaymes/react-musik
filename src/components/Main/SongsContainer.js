import React, { Component } from 'react';

import SongsItem from './SongsItem';
import Loading from './Loading';
import LoadingError from './LoadingError';

// import songsInfo from '../../data/songs';

class SongsCcontainer extends Component {
  state = {
    loading: true,
    error: false,
    jsonData: [],
  }

  componentDidMount() {
    fetch('https://phoenixjaymes.com/assets/data/music/get-songs.php')
      .then(reponse => reponse.json())
      .then((responseData) => {
        this.setState({
          jsonData: responseData.data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
          loading: false,
        });
        console.log('Error fetching and parsing data', error);
      });
  }

  renderLoading = () => <Loading />;

  renderError = () => <LoadingError />;

  renderSongs = () => {
    const { jsonData } = this.state;
    const songList = jsonData.map(song => (
      <SongsItem key={song.id} data={song} />
    ));

    return (
      <div className="mb-5">
        <ul className="list-unstyled">
          {songList}
        </ul>
      </div>
    );
  }

  render() {
    const { loading, error } = this.state;
    if (loading) {
      return this.renderLoading();
    }

    if (error) {
      return this.renderError();
    }

    return this.renderSongs();
  }
}

export default SongsCcontainer;
