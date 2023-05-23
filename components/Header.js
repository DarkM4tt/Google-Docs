import React from "react";
import { IconButton } from "@material-tailwind/react";
import { Icon } from "@mui/material";

function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <IconButton
        color="gray"
        variant="outlined"
        className="md:inline h-20 w-20 border-0"
      >
        <Icon>menu</Icon>
      </IconButton>
      <Icon className="ml-2" color="primary">
        description
      </Icon>
      <h1 className="ml-2 text-gray-700 text-xl">Docs</h1>

      <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg focus-within:text-gray-600 focus-within:shadow-md">
        <Icon color="action">search</Icon>
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-5 text-sm bg-transparent outline-none"
        />
      </div>

      <IconButton
        color="gray"
        variant="outlined"
        className="hidden md:inline-flex ml-5 md:ml-20 h-20 w-20 border-0"
      >
        <Icon>apps</Icon>
      </IconButton>

      <img
        loading="lazy"
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
        src="https://lh3.googleusercontent.com/a/AEdFTp4CcxTFKaGv7pIdXvqbifXJzYBUIFS-6gXKSZ5fWTs=s96-c"
        alt=""
      />
    </header>
  );
}

export default Header;
