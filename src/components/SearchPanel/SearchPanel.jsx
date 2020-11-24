import React from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import './SearchPanel.scss';

const SearchPanel = props => {

  return(
    <div className="search-panel">
      <Input onChange={props.onChange}/>
      <Button title="Find" onClick={props.findWeather}/>
    </div>
  );
}

export default SearchPanel;
