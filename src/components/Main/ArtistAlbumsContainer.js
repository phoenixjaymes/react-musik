import React, { Component } from 'react';

import AlbumsItem from './AlbumsItem';
import Loading from './Loading';
import LoadingError from './LoadingError';

// import albums from '../../data/albums';

class AlbumsContainer extends Component {
  state = {
    loading: true,
    error: false,
    jsonData: {},
  }

  componentDidMount() {
    fetch('https://phoenixjaymes.com/assets/data/music/get-artist-albums.php')
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

  renderAlbums = () => {
    const { jsonData } = this.state;
    const albumList = jsonData.map(album => (
      <AlbumsItem key={album.id} data={album} />
    ));

    return (
      <div className="mb-5">
        <ul className="list-unstyled">
          {albumList}
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

    return this.renderAlbums();
  }
}

export default AlbumsContainer;
