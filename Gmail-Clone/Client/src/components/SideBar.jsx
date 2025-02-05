import React, { useContext } from 'react';
import { LuPencil } from "react-icons/lu";
import { MdInbox } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import messageContext from '../context/messageContext';

const Sidebars = [
    {
        icon: <MdInbox size={"22px"} />,
        text: "Inbox"
    },
    {
        icon: <IoMdStarOutline size={"22px"} />,
        text: "Starred"
    },
    {
        icon: <TbSend2 size={"22px"} />,
        text: "Sent"
    },
    {
        icon: <MdOutlineWatchLater size={"22px"} />,
        text: "Snoozed"
    },
    {
        icon: <MdOutlineKeyboardArrowDown size={"22px"} />,
        text: "More"
    },
];

function Sidebar() {
    const {open,setOpen} = useContext(messageContext)
    return (
        <div className="w-[240px] h-screen p-3">
            {/* Compose Button */}
            <div className="p-2">
                <button onClick={() => setOpen(true)} className="flex items-center gap-3 bg-[#C2E7FF] rounded-2xl px-4 py-3.5 m-3 
                    hover:shadow-md cursor-pointer">
                    <LuPencil size={"20px"} />
                    Compose
                </button>
            </div>

            {/* Sidebar Items */}
            <div className="text-gray-600">
                {Sidebars.map((item, index) => (
                    <div key={index} className="flex items-center pl-6 py-2 rounded-r-full gap-4 my-2 
                        hover:bg-gray-200 cursor-pointer">
                        {item.icon}
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
            
        </div>
    );
}


export default Sidebar;
