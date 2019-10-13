import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import SongList from './SongList';
import SvgComponent from './SvgComponent';

import backArrow from './arrow-thin-left.svg';

class ArtistsAlbums extends Component {
  state = {
    loading: true,
    error: false,
    jsonData: {},
  }

  componentDidMount() {
    const { type, match } = this.props;
    let fetchUrl;
    if (type === 'all') {
      fetchUrl = `http://phoenixjaymes.com/assets/data/music/get-artist-albums.php?id=${match.params.id}`;
    } else {
      fetchUrl = `http://phoenixjaymes.com/assets/data/music/get-artist-albums.php?type=single&id=${match.params.id}`;
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

  handleBackClick = () => {
    const { history } = this.props;

    history.goBack();
  }

  renderLoading = () => (
    <Container as="section">
      <p className="list-container">Loading ...</p>
    </Container>
  );

  renderError = () => (
    <Container as="section">
      <p className="list-container">Sorry there was an error loading your page.</p>
    </Container>
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
      <Container as="section" className="artists-albums">
        <div className="artists-albums__div">
          <img src={backArrow} className="artists-albums__btn-back" role="button" onClick={this.handleBackClick} alt="back arrow" />
        </div>
        
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
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string,
  }),
  type: PropTypes.string,
};

export default ArtistsAlbums;
