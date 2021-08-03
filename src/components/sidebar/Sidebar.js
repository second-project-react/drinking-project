import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import { SidebarData } from './SidebarData'
import Submenu from './SubMenu'
import { IconContext } from 'react-icons/lib'

const Nav = styled.div`
    background: white;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: red;
   
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

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)

    const ShowSidebar = () => setSidebar(!sidebar)


    return (
        <>
        <IconContext.Provider value={{ color: '#ADD8E6'}}>
            <Nav>
                <NavIcon to='#'>
                    <FaIcons.FaBars onClick={ShowSidebar}/>
                    </NavIcon>
                    
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                <NavIcon to='#'>
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
