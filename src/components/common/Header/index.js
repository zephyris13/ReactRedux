import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Header extends Component {
  static propTypes = {
    links: PropTypes.array,
  };

  render() {
    const { links } = this.props;
    return (
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {
          links && links.map((x, i) => <span key={i}> | <Link to={x.to} activeClassName="active">{x.text}</Link></span>)
        }
      </nav>
    );
  }
}
