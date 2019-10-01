import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const Context = React.createContext();
export const { Consumer } = Context;

export class Provider extends Component {
  state = {
    artistGroups: [],
    albumGroups: [],
    songGroups: [],
    genreGroups: [],
    showDetails: false,
    showDetailsId: '',
    loading: true,
    error: false,
  }

  componentDidMount() {
    const musicCategories = sessionStorage.getItem('musicCategories');

    if (musicCategories) {
      const parsedData = JSON.parse(musicCategories);

      this.setState({
        artistGroups: parsedData.artists,
        albumGroups: parsedData.albums,
        songGroups: parsedData.songs,
        genreGroups: parsedData.genres,
        loading: false,
      });
    } else {
      fetch('http://phoenixjaymes.com/assets/data/music/get-music.php')
        .then(reponse => reponse.json())
        .then((responseData) => {
          sessionStorage.setItem('musicCategories', JSON.stringify(responseData.data));
          this.setState({
            artistGroups: responseData.data.artists,
            albumGroups: responseData.data.albums,
            songGroups: responseData.data.songs,
            genreGroups: responseData.data.genres,
            loading: false,
          });
        })
        .catch((error) => {
          this.setState({
            error: true,
            loading: false,
          });
          // console.log('Error fetching and parsing data', error);
        });
    }
  }

  showDetailsModal = (id) => {
    const { showDetails } = this.state;
console.log('show/hide details for id: ', id);
    this.setState({
      showDetails: !showDetails,
      showDetailsId: id,
    });
  }

  render() {
    const {
      artistGroups, albumGroups, songGroups, genreGroups, showDetails, showDetailsId,
    } = this.state;
    const { children } = this.props;
    const value = {
      artistGroups,
      albumGroups,
      songGroups,
      genreGroups,
      showDetails,
      showDetailsId,
      actions: {
        showDetailsModal: this.showDetailsModal,
      },
    };

    return (
      <Context.Provider value={value}>
        {children}
      </Context.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.element,
};

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} WrappedComponent - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(WrappedComponent) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {context => <WrappedComponent {...props} context={context} />}
      </Context.Consumer>
    );
  };
}
