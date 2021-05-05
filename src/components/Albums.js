import React from 'react';
import { useSelector } from 'react-redux';
import Album from './Album';

function Albums(props) {
  const albums = useSelector((state) => state.albums.items);

  return (
    <ul className="list-group">
      {albums.map((album) => {
        return <Album key={album.id} album={album} />;
      })}
    </ul>
  );
}

export default Albums;
