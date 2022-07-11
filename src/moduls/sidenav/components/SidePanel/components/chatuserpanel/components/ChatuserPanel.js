import React from 'react'
const data = [
    {
        username:"Mark Messer",
        lastmessage:"Images",
        type:"image",
        status:"read",
        profile_url:"assets/images/users/avatar-2.jpg",
        datetime:"05 min",
        istypeing:true,
        isactive:"active",
        count:""
    },
    {
        username:"Mark Messer",
        lastmessage:"Admin-A.zip",
        type:"docs",
        status:"unread",
        profile_url:"assets/images/users/avatar-6.jpg" ,
        datetime:"05 min",
        istypeing:false,
        isactive:"",
        count:"02"
    },
    {
        username:"Mark Messer",
        lastmessage:"This theme is awesome!",
        type:"text",
        status:"read",
        profile_url:"assets/images/users/avatar-2.jpg",
        datetime:"05 min",
        istypeing:false,
        isactive:"",
        count:""
    },
    {
        username:"Mark Messer",
        lastmessage:"Images",
        type:"image",
        status:"read",
        profile_url:"assets/images/users/avatar-6.jpg" ,
        datetime:"05 min",
        istypeing:false,
        isactive:"",
        count:""
    }
]
export default function ChatuserPanel() {
  return (
    <div className="tab-pane fade show active" id="pills-chat" role="tabpanel" aria-labelledby="pills-chat-tab">
        {/* <!-- Start chats content--> */}
        <div>
            <div className="px-4 pt-4">
                <h4 className="mb-4">Chats</h4>
                <div className="search-box chat-search-box">            
                    <div className="input-group mb-3 rounded-3">
                        <span className="input-group-text text-muted bg-light pe-1 ps-3" id="basic-addon1">
                            <i className="ri-search-line search-icon font-size-18"></i>
                        </span>
                        <input type="text" className="form-control bg-light" placeholder="Search messages or users" aria-label="Search messages or users" aria-describedby="basic-addon1"/>
                    </div> 
                </div>{/* <!-- Search Box-->  */}
            </div>{/* <!-- .p-4--> */}

            {/* <!-- Start user status--> */}
            <div className="px-4 pb-4" dir="ltr">

                <div className="owl-carousel owl-theme" id="user-status-carousel">
                    {data?.map((item, index)=>(
                        <div key={index.toString()} className="item">
                                <div className="avatar-sm mx-auto d-block chat-user-img online">
                                    <img src={item?.profile_url} alt="user-img" className="img-fluid rounded-circle"/>
                                    <span className="user-status"></span>
                                </div>

                                <h5 className="font-size-10 text-truncate font-w300 mt-1 mb-1">{item.username}</h5>
                        </div>
                    ))}
                </div>
                {/* <!-- end user status carousel--> */}
            </div>
            {/* <!-- end user status--> */}

            {/* <!-- Start chat-message-list--> */}
            <div>
                <h5 className="mb-3 px-3 font-size-16">Recent</h5>

                <div className="chat-message-list px-2" data-simplebar>

                    <ul className="list-unstyled chat-list chat-user-list">
                        {
                            data?.map((item, index)=>(
                                <li key={index.toString()} className={`${item?.status} ${item?.isactive} ${item?.istypeing?"typing":""}`}>
                                    <a href>
                                        <div className="d-flex">
                                            <div className="chat-user-img away align-self-center me-3 ms-0">
                                                <img src={item?.profile_url} className="rounded-circle avatar-xs" alt=""/>
                                                <span className="user-status"></span>
                                            </div>
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h5 className="text-truncate font-size-15 mb-1">{item?.username}</h5>
                                                {item?.istypeing?
                                                <p className="chat-user-message text-truncate mb-0">typing<span className="animate-typing">
                                                    <span className="dot"></span>
                                                    <span className="dot"></span>
                                                    <span className="dot"></span>
                                                </span></p>
                                                :
                                                <>
                                                    {
                                                        item?.type==="image"&&
                                                        <p className="chat-user-message text-truncate mb-0"><i className="ri-image-fill align-middle me-1 ms-0"></i> {item?.lastmessage}</p>
                                                    }
                                                    {
                                                        item?.type==="text"&&
                                                        <p className="chat-user-message text-truncate mb-0">{item?.lastmessage}</p>
                                                    }
                                                    {
                                                        item?.type==="docs"&&
                                                        <p className="chat-user-message text-truncate mb-0"><i className="ri-file-text-fill align-middle me-1 ms-0"></i> {item?.lastmessage}</p>
                                                    }
                                                </>
                                                }
                                            </div>
                                            <div className="font-size-11">{item?.datetime}</div>     
                                            {item?.count&&
                                                <div className="unread-message">
                                                    <span className="badge badge-soft-danger rounded-pill">{item?.count}</span>
                                                </div>
                                            }
                                        </div>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {/* <!-- End chat-message-list--> */}
        </div>
        {/* <!-- Start chats content--> */}
    </div>
  )
}
