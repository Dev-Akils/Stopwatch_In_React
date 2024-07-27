import { menuItemsData } from "../../Api/MenuItemsData";
import MenuItems from "./MenuItems";

const Navbar = () => {
  const depthLevel = 0;

  return (
    <div>
   
    <nav className="desktop-nav ">
      <ul className="menus">
        {menuItemsData.map((menu, index) => {
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
         })}
         
         {/* <button style={{}} className=" bg-[#8b46ac] text-white font-bold py-1 px-4 rounded  relative ml-10 w-[100%]"><a href="https://www.kaitworld.com/public/login">Login</a></button> */}
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
