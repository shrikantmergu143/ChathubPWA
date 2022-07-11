import React from 'react'
import ChatscreenPage from '../../chatscreen/components/ChatscreenPage';
import AudioCallModal from '../../modal/audiocall/AudioCallModal';
import VideoCallModal from '../../modal/videocall/VideoCallModal';
import SidenavFixed from '../../sidenav/components/SidenavFixed';
import "./Homepage.css";
// import background from "./../../assets/background.svg"

export default function Homepage() {
  return (
    <div className="layout-wrapper d-lg-flex">
        <SidenavFixed/>
        {/* <!-- Start User chat--> */}
        <ChatscreenPage/>
        {/* <!-- End User chat--> */}
        
        {/* <!-- audiocall Modal--> */}
        <AudioCallModal/>
        {/* <!-- audiocall Modal--> */}
        {/* <!-- videocall Modal--> */}
        <VideoCallModal/>
        {/* <!-- end modal--> */}
    </div>
  )
}
