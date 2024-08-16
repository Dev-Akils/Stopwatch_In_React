import React, { useState } from "react";
import { MenuItems } from "../../Api/SubheaderUser";
import { Link } from "react-router-dom";

function SubHeader() {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <>
      <div className="bg-slate-50 ">
        <ul className="text-blue-600 flex gap-4 text-[14px] font-medium p-5">
          {MenuItems.map((e, i) => (
            <Link to={e.url || '#'}><li
              key={e.id}
              onClick={() => setActiveIndex(i)}
              className={`cursor-pointer ${
                activeIndex === i ? "border-b-blue-500" : ""
              }`}
            >
              {e.title}
            </li></Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SubHeader;
