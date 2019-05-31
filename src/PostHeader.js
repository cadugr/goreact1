/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function PostHeader(props) {
  const { post } = props;
  const { image, name, time } = post;
  return (
    <div className="container">
      <div className="floated">
        <img src={image} alt="" />
      </div>
      <br />
      <br />
      <div className="floated">{name}</div>
      <br />
      <div className="floated time">{time}</div>
      <div className="clear" />
      <hr />
    </div>
  );
}
