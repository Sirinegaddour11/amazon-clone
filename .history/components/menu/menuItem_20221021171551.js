import React from 'react'

const menuItem = ({title,children}) => {
  return (
    <div className="drop">
      <p className="link">Amazon Business</p>
      <div className="drop-content">
        <div class="header">
          <h2>Amazon Business</h2>
        </div>
        <AmazonBusiness />
      </div>
    </div>
  );
}

export default menuItem
