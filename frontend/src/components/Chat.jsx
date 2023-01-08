import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import chatService from '../features/chat/chatService'
import { FaRegPaperPlane } from "react-icons/fa"
import { IconContext } from "react-icons";

const Chat = () => {
    const { chat } = useSelector((state) => state.chat)
    const { currentUser } = useSelector((state) => state.user)

    const [chatUser, setChatUser] = useState({})

    useEffect(() => {
        if (currentUser && chat) {
            (currentUser._id === chat.firstUser.uid) ? setChatUser(chat.secondUser) : setChatUser(chat.firstUser)
        }
    // eslint-disable-next-line
    }, [chat])

    return (
        <div className="flex flex-col basis-3/4">
            <div className="bg-slate-500 text-white h-24 min-h-24 max-h-24 flex flex-row rounded-tr-lg">

                {(chat && chatUser) ?
                    (
                        <>
                            <img className="h-16 w-16 ml-4 my-4 align-center rounded-full" alt="profile" src={chatUser.imageURL} />
                            <p className="ml-6 text-xl my-8">{chatUser.name}</p>
                        </>
                    )
                    :
                    (
                        <>
                            <img className="h-16 w-16 ml-4 my-4 align-center rounded-full" alt="profile" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                            <p className="ml-6 text-xl my-8">Someone</p>
                        </>
                    )}
            </div>

            <div className="bg-slate-200 h-[35em] min-h-[35em] max-h-[35em] overflow-y-scroll relative">

                <div className='flex flex-row'>
                    <div className='max-w-xl rounded bg-slate-700 text-white m-2 pl-4 pr-2 pt-4 pb-1 drop-shadow-sm'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p className='timestamp text-right'>00:00</p>
                    </div>
                </div>

                <div className='flex flex-row-reverse'>
                    <div className='max-w-xl rounded bg-slate-700 text-white m-2 pl-4 pr-2 pt-4 pb-1 drop-shadow-sm'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est
                        </p>
                        <p className='timestamp text-right'>00:00</p>
                    </div>
                </div>
                
            </div>
            <div >
                <input
                    className="absolute w-[40em] h-[2.7em] pl-6 pr-20 border-t-2 border-gray-300 text-2xl leading-4 text-gray-500 outline-none"
                    placeholder="Write a message"
                />
                <button
                    className="absolute  ml-[56em] bg-red h-[4em] w-10 ml-6"
                >
                    <IconContext.Provider value={{ size:"2em", className: "text-slate-500" }}>
                        <FaRegPaperPlane />
                    </IconContext.Provider>
                </button>
            </div>
        </div>
    )
}

export default Chat