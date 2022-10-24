/* eslint-disable @next/next/no-img-element */
import React from 'react';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
function Mega() {
  return (
    <div class="navbar">
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <div class="dropdown">
        <button class="dropbtn">
          Dropdown
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <div class="header">
            <h2>Mega Menu</h2>
          </div>
          <div class="row">
            <div class="column">
              <h3>Category 1</h3>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
            <div class="column">
              <h3>Category 2</h3>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
            <div class="column">
              <h3>Category 3</h3>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mega;


