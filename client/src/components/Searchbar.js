import React, { useState } from 'react';
import * as BiIcons from 'react-icons/bi';
import './Searchbar.css';
import { Link } from 'react-router-dom';

function Searchbar() {
   const [search, setSearch] = useState('');
   console.log(search);
   return (
      <div className="searchbarContainer">
         <label htmlFor="search">
            <input
               className="inputSearch"
               type="search"
               name="search"
               id="search"
               placeholder="Search By Name"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
            />
         </label>
         <Link to={`/search/${search}`}>
            <BiIcons.BiSearchAlt className="searchIcon" />
         </Link>
      </div>
   );
}

export default Searchbar;
