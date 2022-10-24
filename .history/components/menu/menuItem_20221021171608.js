import React from 'react'

const menuItem = ({title,component}) => {
  return (
    <div className="drop">
      <p className="link">{title}</p>
      <div className="drop-content">
        <div class="header">
          <h2>Amazon Business</h2>
        </div>
       {component}
      </div>
    </div>
  );
}

export default menuItem
