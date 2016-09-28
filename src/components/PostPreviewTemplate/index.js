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

const PostPreviewTemplate = () =>
  <div>
    <div
      style={{
        height: '46px',
        marginBottom: '1.5rem',
        width: `${randomWidth(40, 70)}%`,
        background: 'rgba(160,165,170,.1)',
      }}
    />
    <div style={{ marginBottom: '1.5rem' }}>
      {[...Array(4).keys()].map(n => line(n))}
    </div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          marginRight: '.75rem',
          color: 'rgba(160,165,170,.1)',
          background: 'rgba(160,165,170,.1)',
        }}
      />
      <div
        style={{
          width: '100px',
          height: '16px',
          marginRight: '.75rem',
          color: 'rgba(160,165,170,.1)',
          background: 'rgba(160,165,170,.1)',
        }}
      />
      <div
        style={{
          width: '125px',
          height: '16px',
          color: 'rgba(160,165,170,.1)',
          background: 'rgba(160,165,170,.1)',
        }}
      />
    </div>
    <hr style={{ margin: '4rem 0' }} />
  </div>;

export default PostPreviewTemplate;
