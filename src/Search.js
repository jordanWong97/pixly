import { useState } from 'react';

/** Searchbar component
 *
 * Props:
 *
 * State:
 *
 *
 */



function Search() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (evt) => {
    setSearchTerm(evt.target.value);
  };

  const handleSubmit = (evt) => {

  };

  return (
    <div>
      <input
        className=""
        type="search"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;