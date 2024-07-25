import React,{useState} from 'react';
import { FaEdit } from "react-icons/fa";
// import useFetch from '../../Api/FetchApi';

function DataTable2({data}) {
  // const data=useFetch("http://103.181.21.93:8099/api/v1/admin/user/list");
  console.log(data);
  // const date=data.map((e)=>(e.createdAt.length>=11?e.createdAt.slice(0,3):' '));
  const [currentPage,setCurrentPage]=useState(1)
  const recordsPerPage=5;
  const lastIndex=currentPage*recordsPerPage;
  const firstIndex=lastIndex-recordsPerPage;
  const records=data.slice(firstIndex,lastIndex);
  const npages = Math.ceil(data.length / recordsPerPage);
const numbers = [...Array(npages + 1).keys()].slice(1);

 
  return (
    <div className=' flex-col '>
      <div className='background'>
        <table className='table'>
            <thead className=''>
                <th className='py-3 bg-gray-100'>ID</th>
                <th className='py-3 bg-gray-100'>UserName</th>
                <th className='py-3 bg-gray-100'>Email</th>
                <th className='py-3 bg-gray-100'>UID</th>
                <th className='py-3 bg-gray-100'>Country</th>
                <th className='py-3 bg-gray-100'>Register On</th>
                <th className='py-3 bg-gray-100'>Status</th>
                <th className='py-3 bg-gray-100'>Manage</th>
            </thead>
            <tbody className='text-center'
          >
              {records.map((e,i)=>(
                <tr key={i} className='cursor-pointer duration-200'>
                  <td className='py-3 px-6'>{i+1}</td>
                  <td className='py-3 px-6'>{e.username}</td>
                  <td className='py-3 px-6'>{e.email}</td>
                  <td className='py-3 px-6'>{e.unique_id}</td>
                  <td className='py-3 px-6'></td>
                  <td className='py-3 px-6'>{e.createdAt}</td>
                  <td className='py-3 px-6'></td>
                  <td className='py-3 px-6'><FaEdit /></td>
                </tr>
              ))}
            </tbody>
        </table></div>
        <div className=' items-center   container flex mx-auto md:mx-36 xs:mx-36'>
        <nav className=''>
          <ul className='flex gap-4'>
            <li className='border-2 border-gray-200 p-1 rounded-sm hover:scale-105 overflow-hidden'>
              <a href="#" className='' onClick={prePage}>Prev</a>
            </li>
            {
              numbers.map((n,i)=>(
                <li className={`page-item ${currentPage===n ?`active`:``} `} key={i}>
                  <a href="#" className='' onClick={changePage}>{n}</a>
                </li>
              ))
            }
            <li className='border-2 border-gray-200 rounded-sm hover:scale-105 overflow-hidden p-1'>
              <a href="#" className='' onClick={nextPage}>Next</a>
            </li>
          </ul>
        </nav>
    </div></div>
  )
  function prePage(){
    if(currentPage!==1){
      setCurrentPage(currentPage-1)
      
    }
  }
  function changePage(id){
    setCurrentPage(id);

  }
  function nextPage(){
if(currentPage!==lastIndex){
  setCurrentPage(currentPage+1)
  
}
  }
}

export default DataTable2