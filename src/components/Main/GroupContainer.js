import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListContainer from './ListContainer';
import Loading from './Loading';
import LoadingError from './LoadingError';

import withContext from '../Context';

class GroupContainer extends Component {
  state = {
    loading: true,
    error: false,
    groups: [],
  }

  componentDidMount() {
    const { groups, context } = this.props;
    const { groupToOpen } = context;


    const data = groups.map((obj) => {
      if (obj.group === groupToOpen) {
        return { ...obj, isOpen: true };
      }
      return { ...obj, isOpen: false };
    });

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
    const { groupType, context } = this.props;
    const { setGroupToOpen } = context.actions;

    const groupList = groups.map((item, index) => (
      <li key={item.id}>
        <ListContainer
          groupId={item.id}
          groupType={groupType}
          group={item.group}
          groupList={item.list}
          isOpen={item.isOpen}
          handleToggle={() => this.toggleListAt(index)}
          setGroupToOpen={setGroupToOpen}
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
  context: PropTypes.shape(),
  groups: PropTypes.arrayOf(PropTypes.object),
  groupType: PropTypes.string,
};

GroupContainer.defaultProps = {
  groupType: 'artist',
};

export default withContext(GroupContainer);
