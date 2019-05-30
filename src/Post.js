import React from 'react';
import './style.css';

const Post = props => (
  <div className="card">
    <div className="container">
      <div className="floated">
        <img src={props.image} />
      </div>
      <br />
      <br />
      <div className="floated">{props.name}</div>
      <br />
      <div className="floated">{props.time}</div>
      <div className="clear" />
      <hr />
      {props.text}
    </div>
  </div>
);

export default Post;
