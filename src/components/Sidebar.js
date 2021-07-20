import React from "react";
import { Nav } from "react-bootstrap";
import { Home,Heart,User,Sliders,Settings } from 'react-feather';

import './Sidebar.css'

const Sidebar = (props) => {


    return (
        <>  
            <Nav className="col-sm-1 d-none d-sm-block bg-dark sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
                
                <div className="sideNavIcons">

            <div className="topNavIcons">
            <Nav.Item onClick={() => props.itemSelect(1)}>
                <Nav.Link><Home size={30}/></Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={() => props.itemSelect(2)}>
                <Nav.Link><Heart size={30}/></Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={() => props.itemSelect(3)}>
                <Nav.Link><User size={30}/></Nav.Link>
            </Nav.Item>
            <Nav.Item onClick={() => props.itemSelect(4)}>
                  <Nav.Link><Sliders size={30}/></Nav.Link>
            </Nav.Item>


                </div>
            <div className="bottomNavIcon">
                <Nav.Item>
                <Nav.Link><Settings size={30}/></Nav.Link>
                        </Nav.Item>
                        </div>
                        </div>
       
            </Nav>
           
        </>
        );
  };

export default Sidebar;