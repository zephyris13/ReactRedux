import React, { Component, PropTypes } from 'react';
import Header from '../components/common/Header';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="container-fluid">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}