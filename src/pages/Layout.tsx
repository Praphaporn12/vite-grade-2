import { Outlet, Link } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";



const Layout = () => {
  const location = useLocation();
  const [subject, setSubject] = useState("");


  return (
    <>

  
<nav className="text-grayless bg-border h-16 text-gl text-left pt-5">
        <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/">  <a className="text-black hover:text-gray-600 transition duration-300 pl-16 pt-5" >เลือกรายวิชา</a></Link>
                <span className="mx-2 text-gray-400">/</span>
            </li>
            <li className="flex items-center">
                <Link to="/Result"><a className="text-black hover:text-gray-600 transition duration-300  pt-5" >ตัดเกรด</a></Link>
            </li>
        </ol>
    </nav>


      <Outlet />
    </>
  )
};


export default Layout;