import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import SongsContainer from './SongsContainer';

import albums from '../../data/albums';

class ArtistsAlbums extends Component {
  state = {
    loading: true,
    error: false,
    jsonData: {},
  }

  componentDidMount() {
    this.setState({
      loading: false,
      jsonData: albums.data,
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
    const dataContainers = jsonData.albums.map(songs => (
      <SongsContainer key={songs.id} data={songs} />
    ));

    return (
      <Container as="section">
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

export default ArtistsAlbums;
