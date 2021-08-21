import { Link } from 'react-router-dom'
import styled from 'styled-components'
import React, { useState } from 'react'


const SidebarLink = styled(Link)`
    display: flex;
    background-color:#4C5760;
    
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 45px;
    text-decoration: none;
    font-size: 18px;
    color:white;
    font-weight:600;
  

    &:hover{
        background: linear-gradient(30.11deg, #FFFFFF -11.43%, #FFEE93 13.8%, #F0D7BF 47.62%, #95D1EB 86.69%);
        opacity: 0.85;
   
     
        cursor: pointer;
        text-decoration: none;
        color:black;
        svg{
        fill:black;
           }
     
    }
`;
const SidebarLabel = styled.span`
    margin-left: 16px;
`;
const DropdownLink = styled(Link)`
   
    background-color:#4C5760;
    opacity: 0.85;
    height: 30px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-weight:600;
    svg{
        
        fill:white;
           }
           padding-bottom:10px;
           padding-top:10px;

    &:hover {
        background: linear-gradient(30.11deg, #FFFFFF -11.43%, #FFEE93 13.8%, #F0D7BF 47.62%, #95D1EB 86.69%);
        opacity: 0.85;
    
        cursor: pointer;
        text-decoration: none;
        color:black;
        svg{
        fill:black;
           }
    }
`

const SubMenuIcon = styled.div`

`;




const SubMenu = ({ item }) => {

    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)
    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <SubMenuIcon>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </SubMenuIcon>
                {item.subNav && subnav 
                ? item.iconOpened 
                : item.subNav 
                ? item.iconClosed 
                : null}
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return(
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    )
}

export default SubMenu