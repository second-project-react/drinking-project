import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import { SidebarData } from './SidebarData'
import Submenu from './SubMenu'
import { IconContext } from 'react-icons/lib'
import './Sidebar.css'



const Nav = styled.div`
    width: 100vw;
    background: white;
    position: fixed;
    top: 0;
    z-index: 10;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;


const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;


    svg{
    color:black;
     
    }
`;


const SidebarNav = styled.nav`
    background: #4C5760;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
    opacity: 0.9;

`;

const SidebarWrap = styled.div`
    width: 100%;
`;
// const pageName = styled.h1`
//   color: blue;
// `;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

    const ShowSidebar = () => setSidebar(!sidebar)


    return (
        <>
        
        <IconContext.Provider value={{ color: '#ADD8E6'}}>
            <Nav>
                
                <NavIcon>
                    <FaIcons.FaBars onClick={ShowSidebar}/>
                    </NavIcon> 
                    <Link to='/'><p className="pageName">THE COCKTAIL BAR</p></Link>
                    <Link to='/'>
                    <div className="logoDiv">
                    <img className="logo" src="./img/logo.png"  alt="drink" />  
                    </div>
                    </Link>
                     
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                <NavIcon>
                    <AiIcons.AiOutlineClose onClick={ShowSidebar}/>
                </NavIcon>
                {SidebarData.map((item, index) => {
                    return (
                        <Submenu item={item} key={index}/>
                    )
                })}
                </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>    
        </>
    )
}

export default Sidebar
