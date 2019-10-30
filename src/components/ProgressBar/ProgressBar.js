import React from 'react';

const ProgressBar = ({ percent, text }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    }}
  >
    <div
      style={{
        border: '1px solid black',
        height: '20px',
        width: '300px',
      }}
    >
      <div
        style={{
          height: '20px',
          width: `${percent * 3}px`,
          backgroundColor: 'green',
        }}
      />
    </div>
    {text}
  </div>
);

export default ProgressBar;
