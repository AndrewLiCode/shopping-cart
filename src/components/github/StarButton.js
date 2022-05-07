import React from 'react';

const StarButton = () => (
  <div className="star-button-container">
    <small>Leave a star on Github if this repository was useful :)</small>
    <a
      className="github-button"
      href="https://github.com/AndrewLiCode/shopping-cart"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star AndrewLiCode/shopping-cart on GitHub"
    >
      Star
    </a>
  </div>
);

export default StarButton;
