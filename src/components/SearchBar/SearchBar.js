import React, { useState } from 'react';
import './SearchBar.css';
import Button from '../Button';


function SearchBar(props) {
  const [term, setTerm] = useState('')

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  }

  const search = () => {
    props.onSearch(term);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      search();
    }
  }

  return (
    <div className='SearchBar'>
      <input 
      placeholder='Enter A Song, Album, or Artist'
      onChange={handleTermChange}
      onKeyDown={handleKeyDown}
      />
      <Button 
      onClick={search}
      text='Search'
      />
    </div>
  )

}

export default SearchBar;