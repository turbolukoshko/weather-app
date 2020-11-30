import React from 'react';
import './PageNotFound.scss';

const PageNotFound = props => {
  return (
    props.error && (
      <div className="weather-not-found">
        <p className="weather-code">404</p>
        <h1 className="weather-not-found__title">Oh no! Something went wrong.</h1>
        <p className="weather-not-found__description">We couldn't find the city. Please, check the entry is correct and try again.</p>
        <div className="buttons-panel">
          <a href="/" className="weather-not-found__link">Go home</a>
        </div>
      </div>
    )
  );
}

export default PageNotFound;
