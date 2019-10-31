import React from 'react';

const ProgressBar = ({ percent, text, hasAnswered }) => (
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
    <span
      style={!hasAnswered ? {
        color: 'transparent',
        textShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
      } : {}}
    >
      {text}
    </span>
  </div>
);

export default ProgressBar;
