import { BiHomeAlt, BiMoviePlay, BiInfoCircle } from 'react-icons/bi';
import { useState } from 'react';

const Index = () => {
  return (
    <nav className="col-span-1 bg-cyan-300">
      <div className=" mx-4 justify-between items-center ">
        <h4 className="uppercase font-bold text-primary py-4 border-b border-primary text-right ">
          Phimmoi.net
        </h4>
      </div>
      <ul className="mx-4 py-2 ">
        <li className="flex p-2 justify-end items-center cursor-pointer bg-primary text-white">
          <h3 className="mr-2">Home</h3>
          <BiHomeAlt size="1.875rem" />
        </li>
        <li className="flex p-2 justify-end items-center cursor-pointer">
          <h3 className="mr-2">Movies</h3>
          <BiMoviePlay size="1.875rem" />
        </li>
        <li className="flex p-2 justify-end items-center cursor-pointer ">
          <h3 className="mr-2">About</h3>
          <BiInfoCircle size="1.875rem" />
        </li>
      </ul>
    </nav>
  );
};

export default Index;
