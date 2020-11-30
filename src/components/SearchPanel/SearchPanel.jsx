import React from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import './SearchPanel.scss';

const SearchPanel = props => {

  return(
    <div className="search">
      <form className="search-panel">
        <Input onChange={props.onChange}/>
        <Button title="Find" onClick={props.findWeather}/>
      </form>
      <div className="error-message">{props.cityError}</div>
    </div>
  );
}

export default SearchPanel;
