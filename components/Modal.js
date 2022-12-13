import Image from "next/image";
import { XCircleIcon, HandThumbUpIcon  } from "@heroicons/react/24/outline";

function Modal({Toggle,img, description, likes, date, title}) {
   
  return (
    <>
    <div className="h-full w-full fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 cursor-pointer bg-slate-500 bg-opacity-80 opacity-100 text-white z-50  "   >
        <div className=" relative h-90 w-3/4  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-web-black  rounded-md flex justify-center z-60  " >
          <div className="flex flex-col items-center">
          <div className=" max-w-2xl rounded-lg  ">
          <Image className=" rounded-lg"  src={img} width={1920} height={1080} alt="i" priority />
          <div><h1 className="text-2xl font-semibold my-2 mx-2">{title}</h1></div>
          <div className="flex w-full h-10 my-3 group">
            <div className="flex-1 items-center bg-slate-500 mx-2 flex justify-center h-full w-full rounded-md ">{likes}<HandThumbUpIcon className="h-2/4 group-hover:fill-slate-50 mx-2" />  Likes</div>
            <div className="flex-1 items-center bg-slate-500 mx-2 flex justify-center h-full w-full rounded-md group">Release Date: {date}</div>
          </div>
          </div>
          <div><p className="mx-5 max-w-2xl font-titil   ">{description}</p></div>
          </div>
          <XCircleIcon className="absolute -top-5 -right-5 h-12 w-12 text-sky-200 z-50 " onClick={() => Toggle()}/>
        </div>
    
    
    </div>
    </>
  )
}

export default Modal