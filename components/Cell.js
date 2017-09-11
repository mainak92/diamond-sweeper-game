import React from 'react';

const style = {
  width: '24px',
  height: '24px',
  border: '1px solid black',
  margin: '2px',
  backgroundSize: 'cover',
};

const Cell = ({children, filled = false, onClick}) => {
  let backgroundImage = 'url(../images/question.png)';
  if (filled === "true") {
    backgroundImage = 'url(../images/diamond.png)';
  }
  if (filled === "false") {
    backgroundImage = '';
  }
  return (
  <div
    onClick={onClick}
    style={{
      ...style,
      backgroundImage
    }}
  >
    {children}
  </div>);
};

export default Cell;
