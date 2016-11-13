import React, { Component, PropTypes } from 'react';
import Header from '../components/common/Header';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

    this.headerItems = [
      {
        to: 'courses',
        text: 'Courses',
      },
      {
        to: 'posts',
        text: 'Posts',
      },
      {
        to: 'about',
        text: 'About',
      },
    ];
  }

  render() {
    return (
      <div className="container-fluid">
        <Header links={this.headerItems} />
        {this.props.children}
      </div>
    );
  }
}
