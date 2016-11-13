import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../redux/actions/postsActions';

@connect(
  state => ({
    posts: state.get('posts'),
  }),
  {
    fetchPosts,
  },
)
export default class PostsPage extends Component {
  static propTypes = {
    fetchPosts: PropTypes.func,
    posts: PropTypes.object,
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  _renderRow(item, i) {
    return (
      <li key={i}>
        { item.get('title') }
      </li>
    );
  }

  render() {
    const data = this.props.posts.get('data');
    const isLoading = this.props.posts.get('isFetching');

    return (
      <div>
        <h1>Posts</h1>
        {
          isLoading
          ? <h2>Loading...</h2>
          : <ul>{ data && data.sortBy(x => x.get('title')).take(20).map(this._renderRow) }</ul>
        }
      </div>
    );
  }
}
