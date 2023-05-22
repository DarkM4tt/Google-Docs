import React from "react";
import { Button } from "@material-tailwind/react";
import IconButton from "@material-tailwind/react";

function Header() {
  return (
    <div className="flex items-center">
      <Button variant="outline" className="hidden md:inline h-20 w-20 border-0">
        <IconButton>
          <i className="fas fa-heart" />
        </IconButton>
      </Button>
    </div>
  );
}

export default Header;
