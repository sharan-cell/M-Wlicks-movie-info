import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import Image from "next/image"
import { useState } from "react"
import Modal from "./Modal";
import { forwardRef } from "react";
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

const Thumbnail = forwardRef(({result}, ref) => {
     const BASE_URL = "https://image.tmdb.org/t/p/original/";
     const [showModal, setShowModal] = useState(false);
     const Toggle = () => setShowModal(!showModal);
  return (
    <>
    <div ref={ref} className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    onClick={() => Toggle()}>
    <Image  src={`${BASE_URL}${result.backdrop_path || result.poster_path}` ||
    `${BASE_URL}${result.poster_path} ` }
     width={1920} height={1080} alt="i" priority /> 

     <div className="p-2">
       
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name || <Skeleton />}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} •` || <Skeleton />}{" "}
          {result.release_date || result.first_air_date || <Skeleton />} •{" "}
          <HandThumbUpIcon className="h-5 mx-2" />
          {result.vote_count || <Skeleton />}
        </p>
      </div>

      
    </div>
    {showModal ? (<><Modal img={`${BASE_URL}${result.backdrop_path || result.poster_path}` ||
    `${BASE_URL}${result.poster_path}`} description={result.overview} title={result.title} likes={result.vote_count} date={result.release_date} Toggle={Toggle} className=" " /></>): null}
    </>
  );
});
Thumbnail.displayName = "Thumbnail";
export default Thumbnail;