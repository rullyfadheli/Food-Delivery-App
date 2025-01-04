"use client";

import { useEffect, useState } from "react";
import Navigator from "./Navigator";

const MainHeader = (data) => {
  const { buttonTextLeft, style, buttonTextRight, title, linkBack, linkMenu } =
    data;

  const [titleValue, setTitleValue] = useState(title);
  useEffect(() => {
    setTitleValue(title);
  }, [title]);

  return (
    <nav className={`flex justify-between h-16 w-full ${style}`}>
      <div className="rounded-full">{buttonTextLeft}</div>

      <p className="font-inter text-md p-4 text-center">{titleValue}</p>

      <Navigator
        linkMenu={linkMenu}
        style="font-inter font-semibold rounded-full h-12 w-12 bg-[#FFF8EF] my-1 flex justify-center items-center"
        text={buttonTextRight}
      />
    </nav>
  );
};

export default MainHeader;
