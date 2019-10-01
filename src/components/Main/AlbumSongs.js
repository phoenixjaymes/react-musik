import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import SongsContainer from './SongsContainer';

import albumSongs from '../../data/albumSongs';

class AlbumSongs extends Component {
  state = {
    loading: true,
    error: false,
    jsonData: {},
  }

  componentDidMount() {
    this.setState({
      loading: false,
      jsonData: albumSongs.data,
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
    return (
      <Container as="section">
        <SongsContainer data={jsonData.songs} />
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

export default AlbumSongs;
