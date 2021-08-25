import React, { useState } from 'react'
import * as BiIcons from 'react-icons/bi'
import './Searchbar.css'
import { Link } from 'react-router-dom'


function Searchbar () {
    const [search, setSearch] = useState('')
    console.log(search)
  return (
    <div>

      <label htmlFor="search">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
        <Link to={`/search/${search}`}><BiIcons.BiSearchAlt className="searchIcon" /></Link>
   
    </div>
  )
}


export default Searchbar