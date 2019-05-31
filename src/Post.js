/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './style.css';
import PostHeader from './PostHeader';

const Post = ({ post }) => (
  <div className="card">
    <PostHeader post={post} />
    <div className="text">{post.text}</div>
  </div>
);

export default Post;
