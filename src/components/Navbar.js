// import { Navbar,Nav,Button,FormControl,Form, Container } from 'react-bootstrap';
import './Navbar.css'
import { Search } from 'react-feather';

const Navigation = () => {
   
  return (
     <div>
      <div className="topnav">
        <a className="" href="#home">Home</a>
        <div className="rightNavItems">
          <div className="searchContainer">
            <input  className="searchInput" type="text" placeholder="Search.." />
            <button type='button' className='searchbutton'>
            <Search size={24}/>
            </button>
          </div>
        </div>
        <div className="mobileNavItems">
        <Search size={30}/>
        </div>
  </div>

  </div>
   )
}
export default Navigation