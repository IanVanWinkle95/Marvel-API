import React from 'react';

export default function marvelData({ characters }) {
  return (
    <>
      <h1>{characters?.Comics}</h1>
      <h2>{characters?.events}</h2>
      <img src={Characters?.Image} alt={characters?.Comics} />
      <h2>{Characters?.series}</h2>
      <h2>{Characters?.stories}</h2>
    </>
  );
}
