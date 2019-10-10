import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

// import SongsContainer from './SongsContainer';

import SongList from './SongList';
import SvgComponent from './SvgComponent';

// import albums from '../../data/albums';

class ArtistsAlbums extends Component {
  state = {
    loading: true,
    error: false,
    jsonData: {},
  }

  componentDidMount() {
    const { type, matchObj } = this.props;
    let fetchUrl;
    if (type === 'all') {
      fetchUrl = `http://phoenixjaymes.com/assets/data/music/get-artist-albums.php?id=${matchObj.params.id}`;
    } else {
      fetchUrl = `http://phoenixjaymes.com/assets/data/music/get-artist-albums.php?type=single&id=${matchObj.params.id}`;
    }

    fetch(fetchUrl)
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

  renderLoading = () => (
    <p>Loading ...</p>
  );

  renderError = () => (
    <p>Sorry there was an error loading your page.</p>
  );

  renderContainers = () => {
    const { jsonData } = this.state;
    const artistName = jsonData.artist;
    const dataContainers = jsonData.albums.map(album => (
      <div key={album.id} className="list-container">
        <h3>{album.title}</h3>
        <SongList data={album.songs} />
      </div>
    ));

    return (
      <Container as="section">
        <SvgComponent title={artistName} />
        {dataContainers}
      </Container>
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

    return this.renderContainers();
  }
}

ArtistsAlbums.propTypes = {
  matchObj: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string,
  }),
  type: PropTypes.string,
};

export default ArtistsAlbums;
