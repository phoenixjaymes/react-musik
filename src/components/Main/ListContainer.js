import React, { Component } from 'react';
// import {
//   Button,
// } from 'react-bootstrap';
import PropTypes from 'prop-types';

import ArtistsItem from './ArtistsItem';
import AlbumItem from './AlbumsItem';
import SongsItem from './SongsItem';
import Loading from './Loading';
import LoadingError from './LoadingError';

class ListContainer extends Component {
  state = {
    loading: false,
    error: false,
    jsonData: [],
    isListShown: false,
  }

  componentDidMount() {
    const { isOpen, groupType } = this.props;

    if (isOpen === true && groupType === 'song') {
      this.getDataFromDb();
    } else if (isOpen === true && groupType !== 'song') {
      this.getDataFromProps();
    }
  }

  // Fetches data for songs
  getDataFromDb = () => {
    const { jsonData, isListShown } = this.state;
    const { group } = this.props;

    // Prevent second fetch
    if (jsonData.length > 0) {
      return;
    }

    this.setState({
      isListShown: !isListShown,
      loading: true,
    });

    fetch(`https://phoenixjaymes.com/assets/data/music/get-songs.php?alpha=${group}`)
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

  // Fetches data for songs
  getDataFromProps = () => {
    const { isListShown } = this.state;
    const { groupType, groupList } = this.props;

    if (groupType === 'artist') {
      this.setState({
        jsonData: groupList,
        loading: false,
      });
    } else if (groupType === 'album') {
      this.setState({
        jsonData: groupList,
        loading: false,
      });
    } else if (groupType === 'genre') {
      this.setState({
        jsonData: groupList,
        loading: false,
      });
    }

    this.setState({
      isListShown: !isListShown,
    });
  }

  handleButtonClick = () => {
    const {
      handleToggle, isOpen, groupType, group, setGroupToOpen,
    } = this.props;

    handleToggle();
    if (isOpen === true) {
      setGroupToOpen('');
    } else {
      setGroupToOpen(group);
    }

    if (isOpen === false && groupType === 'song') {
      this.getDataFromDb();
    } else if (isOpen === false && groupType !== 'song') {
      this.getDataFromProps();
    }
  }

  renderLoading = () => <Loading />;

  renderError = () => <LoadingError />;

  renderList = () => {
    const { jsonData } = this.state;
    const { groupType, isOpen, group } = this.props;
    const artistList = jsonData.map((item) => {
      if (groupType === 'artist') {
        return <ArtistsItem key={item.id} data={item} />;
      }

      if (groupType === 'album') {
        return <AlbumItem key={item.id} data={item} />;
      }

      if (groupType === 'song') {
        return <SongsItem key={item.id} data={item} />;
      }

      if (groupType === 'genre') {
        return <ArtistsItem key={item.id} data={item} />;
      }
      return <ArtistsItem key={item.id} data={item} />;
    });

    const collapseClass = isOpen ? 'show' : 'hide';
    const arrowClass = isOpen ? 'arrowUp' : 'arrowDown';
    const btnLabel = group === 'int' ? '#' : group.toUpperCase();

    return (
      <div className="mb-1">
        <div className={`mb-2 group-label ${arrowClass}`} onClick={this.handleButtonClick}><span>{btnLabel}</span></div>

        <div className={`collapse ${collapseClass}`}>
          <ul className="list-unstyled">
            {artistList}
          </ul>
        </div>
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
    return this.renderList();
  }
}

ListContainer.propTypes = {
  groupId: PropTypes.string,
  group: PropTypes.string.isRequired,
  groupType: PropTypes.string.isRequired,
  groupList: PropTypes.arrayOf(PropTypes.object),
  handleToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  setGroupToOpen: PropTypes.func,
};

export default ListContainer;
