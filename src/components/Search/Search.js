import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { searchSerialRequest } from 'actions/search';
import ShowPreview from '../ShowPreview';

const SearchWrapper = styled.div`
  display: block;
`;

class Search extends Component {
  state = {
    query: '',
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState(state => ({ ...state, query: value }));
  };

  handleClick = () => {
    const { searchSerialRequest } = this.props;
    const { query } = this.state;

    searchSerialRequest(query);
  };

  handleLoading = () => {
    const { isLoading, serials } = this.props;

    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return serials.map(serial => <ShowPreview key={serial.name} {...serial} />);
    }
  };

  render() {
    const { query } = this.state;

    return (
      <SearchWrapper>
        <input value={query} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Найти сериал</button>
        <div className="t-search-result">{this.handleLoading()}</div>
      </SearchWrapper>
    );
  }
}

const mapStateToProps = ({ search }) => ({
  isLoading: search.isLoading,
  serials: search.serials,
});

const mapDispatchToProps = { searchSerialRequest };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
