import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import { MdCropSquare } from "react-icons/md";
import { useNavigate } from "react-router-dom";



const Email = () => {
  const navigate = useNavigate();
  const openMail = ()=>{
    navigate("/mail/123")
  }
  return (
    <>
      <div onClick={openMail} className="flex items-center justify-between border-b
       border-gray-200 px-4 py-3 gap-8 cursor-pointer hover:shadow-md ">
        {/* Child 1 */}
        <div className="flex items-center gap-3">
        <MdCropSquare/>
        <IoMdStarOutline/>
        <span className="font-semibold">Say My Name</span>
        </div>

        {/* Child 2  */}
        
        <div className="flex-1 ml-4">

          <span>Hiesenberg igehihoffiofheoiohfioh snfiof fewoifiof iofo</span>
           
        </div>

        {/* Child 3 */}

        <div className="flex-none text-gray-500 text-sm">
          <p>12 Days Ago</p>
           
        </div>
      </div>
    </>
  );
};

export default Email;
