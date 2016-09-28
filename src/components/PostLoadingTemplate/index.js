import React from 'react';

const randomWidth = (min, max) => Math.floor((Math.random() * ((max - min) + 1)) + min);

const line = i =>
  <div
    key={i}
    style={{
      height: '18px',
      marginBottom: '4px',
      width: `${randomWidth(85, 100)}%`,
      background: 'rgba(160,165,170,.1)',
    }}
  />;

const paragraph = i =>
  <div key={i} style={{ marginBottom: '2rem' }}>
    {[...Array(5).keys()].map(n => line(n))}
  </div>;

const PostLoadingTemplate = () =>
  <div>
    <div style={{ marginBottom: '3rem' }}>
      <div
        style={{
          height: '46px',
          marginBottom: '.5rem',
          width: `${randomWidth(40, 70)}%`,
          background: 'rgba(160,165,170,.1)',
        }}
      />
      <div
        style={{
          height: '17px',
          width: `${randomWidth(40, 70)}%`,
          background: 'rgba(160,165,170,.1)',
        }}
      />
    </div>
    {[...Array(5).keys()].map(i => paragraph(i))}
  </div>;

export default PostLoadingTemplate;
