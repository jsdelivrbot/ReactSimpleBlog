import React, { Component } from 'react';
import { connect } from 'react-redux';
// actions
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className="text-xs-right">
        <Link to="posts/new" className="btn btn-primary">Add Post</Link>
      </div>
    );
  }
};

export default connect(null, { fetchPosts } )(PostsIndex);
