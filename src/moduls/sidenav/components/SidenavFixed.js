import React from 'react'
import "./SidenavFixed.css";
import SidepanelPage from './SidePanel/components/SidepanelPage';
import SidetabsPage from './sidetabs/components/SidetabsPage';

export default function SidenavFixed() {
  return (
    <>
        {/* <!-- Start left sidebar-menu--> */}
        <SidetabsPage/>
        {/* <!-- end left sidebar-menu--> */}
        {/* <!-- start chat-leftsidebar--> */}
        <SidepanelPage/>
        {/* <!-- end chat-leftsidebar--> */}
    </>
  )
}
