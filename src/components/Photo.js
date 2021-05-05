import React from 'react';

function Photo(props) {
  return (
    <li className="list-group-item list-group-flush">
      <img src={props.photo.thumbnailUrl} />
      {props.photo.title}
    </li>
  );
}

export default Photo;
