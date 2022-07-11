import React from 'react';
import ChatuserPanel from './chatuserpanel/components/ChatuserPanel';
import ContactPanel from './contactpanel/components/ContactPanel';
import GroupPanel from './groupspanel/components/GroupPanel';
import SettingPanel from './settingpanel/components/SettingPanel';
import "./SidepanelPage.css"
import UserPanelPage from './userpanel/components/UserPanelPage';


export default function SidepanelPage() {
  return (
    <div className="chat-leftsidebar me-lg-1 ms-lg-0">
        <div className="tab-content">
           {/* <!-- Start Profile tab-pane--> */}
           <UserPanelPage/>
           {/* <!-- End Profile tab-pane--> */}

           {/* <!-- Start chats tab-pane--> */}
           <ChatuserPanel/>
           {/* <!-- End chats tab-pane--> */}
            
           {/* <!-- Start groups tab-pane--> */}
           <GroupPanel/>
           {/* <!-- End groups tab-pane--> */}

           {/* <!-- Start contacts tab-pane--> */}
            <ContactPanel/>
           {/* <!-- End contacts tab-pane--> */}
            
           {/* <!-- Start settings tab-pane--> */}
           <SettingPanel/>
           {/* <!-- End settings tab-pane--> */}
        </div>
       {/* <!-- end tab content--> */}

    </div>
  )
}
