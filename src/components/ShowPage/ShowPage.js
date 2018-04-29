import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getSerialRequest } from 'actions/show';
import { show } from '../../api';

class ShowPage extends PureComponent {
  componentWillMount() {
    const { getSerialRequest } = this.props;
    const { id } = this.props.match.params;

    getSerialRequest(id);
  }

  render() {
    const { isLoading, serials } = this.props;

    return isLoading ? <p>Loading...</p> : <p>There can be more useful information</p>;
  }
}

const mapStateToProps = ({ shows }) => ({
  serial: show.serial,
  isLoading: show.serial,
});

const mapDispatchToProps = {
  getSerialRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
