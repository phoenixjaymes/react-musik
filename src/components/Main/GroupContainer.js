import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListContainer from './ListContainer';
import Loading from './Loading';
import LoadingError from './LoadingError';

class GroupContainer extends Component {
  state = {
    loading: true,
    error: false,
    groups: [],
  }

  componentDidMount() {
    const { groups } = this.props;
    const data = groups.map(obj => (
      { ...obj, isOpen: false }
    ));
    this.setState({
      groups: data,
      loading: false,
    });
  }

  toggleListAt = (indexToChange) => {
    const { groups } = this.state;
    this.setState({
      groups: groups.map((data, index) => {
        if (index === indexToChange) {
          return {
            ...data,
            isOpen: !data.isOpen,
          };
        }
        return {
          ...data,
          isOpen: false,
        };
      }),
    });
  }

  renderLoading = () => <Loading />;

  renderError = () => <LoadingError />;

  renderAlbums = () => {
    const { groups } = this.state;
    const { groupType } = this.props;
    const groupList = groups.map((item, index) => (
      <li key={item.id}>
        <ListContainer
          groupId={item.id}
          groupType={groupType}
          group={item.group}
          groupList={item.list}
          isOpen={item.isOpen}
          handleToggle={() => this.toggleListAt(index)}
        />
      </li>
    ));

    return (
      <div className="mb-5 list-container">
        <ul className="list-unstyled">
          {groupList}
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

GroupContainer.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.object),
  groupType: PropTypes.string,
};

GroupContainer.defaultProps = {
  groupType: 'artist',
};

export default GroupContainer;
