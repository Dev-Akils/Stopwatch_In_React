import React, { useState, useEffect, act,useImperativeHandle,forwardRef } from "react";
import { CgLaptop } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
const ExchangeTable = forwardRef(({ data }, ref) => {
  useImperativeHandle(ref, () => ({
    updateData() {
      // Optionally handle any specific actions when data is updated
    }
  }));
//  function ExchangeTable({ data=[],
//   emailVerifiedData, notVerifiedData, activeData, inactiveData,ref
//  }) 
//  {
//  console.log("email",email)
//  console.log("active",active)
 

//   console.log(active);
//   console.log(email)
//   const [filteredData, setFilteredData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const recordsPerPage = 5;
//   console.log(filteredData);
//   useEffect(() => {
//     // Filter data based on props
//     const safeData = Array.isArray(data) ? data : [];
//     const newFilteredData = safeData.filter((user) =>
//       (email ? user.email?.includes(email) : true) &&
//       (email1 ? user.email?.includes(email1) : true) &&
//       (active !== undefined ? user.active === active : true) &&
//       (active1 !== undefined ? user.active === active1 : true)
//     );
//     setFilteredData(newFilteredData);
    
//     setCurrentPage(1); // Reset to first page on filter change
//   }, [data, email, email1, active, active1]);

  // Pagination calculations
  // const lastIndex = currentPage * recordsPerPage;
  // const firstIndex = lastIndex - recordsPerPage;
  // const records = filteredData.slice(firstIndex, lastIndex);
  // const npages = Math.ceil(filteredData.length / recordsPerPage);
  // const numbers = [...Array(npages + 1).keys()].slice(1);


  // const [filteredData, setFilteredData] = useState([]);

  // useEffect(() => {
  //   // Combine all data arrays into one filtered data
  //   setFilteredData([...emailVerifiedData, ...notVerifiedData, ...activeData, ...inactiveData]);
  // }, [emailVerifiedData, notVerifiedData, activeData, inactiveData]);
  // useImperativeHandle(ref, () => ({
  //   updateData() {
  //     // You can also perform additional actions here if needed
  //     setFilteredData([...emailVerifiedData, ...notVerifiedData, ...activeData, ...inactiveData]);
  //   }
  // }));
 

  return (
    <div className="flex-col w-full" >
      <div className="overflow-x-auto w-full">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6">ID</th>
              <th className="py-3 px-6">UserName</th>
              <th className="py-3 px-6">Email</th>
              <th className="py-3 px-6">UID</th>
              <th className="py-3 px-6">Country</th>
              <th className="py-3 px-6">Register On</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6">Manage</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((e, i) => (
              <tr key={i} className="cursor-pointer hover:bg-gray-100 duration-200">
                <td className="py-3 px-6">{i + 1}</td>
                <td className="py-3 px-6">{e.username}</td>
                <td className="py-3 px-6">{e.email}</td>
                <td className="py-3 px-6">{e.unique_id}</td>
                <td className="py-3 px-6">{e.country || ''}</td>
                <td className="py-3 px-6">{e.createdAt}</td>
                <td className="py-3 px-6">{e.active ? 'Active' : 'Inactive'}</td>
                <td className="py-3 px-6">
                  <FaEdit />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="flex justify-center mt-4">
        <nav>
          <ul className="flex gap-4">
            <li className="border-2 border-gray-200 p-1 rounded-sm hover:scale-105">
              <a href="#" onClick={prePage}>Prev</a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`border-2 p-1 rounded-sm hover:bg-gray-200 ${currentPage === n ? "bg-gray-300" : ""}`}
                key={i}
              >
                <a href="#" onClick={() => changePage(n)}>{n}</a>
              </li>
            ))}
            <li className="border-2 border-gray-200 p-1 rounded-sm hover:scale-105">
              <a href="#" onClick={nextPage}>Next</a>
            </li>
          </ul>
        </nav>
      </div> */}
    </div>
  );

  // function prePage() {
  //   if (currentPage !== 1) {
  //     setCurrentPage(currentPage - 1);
  //   }
  // }

  // function changePage(id) {
  //   setCurrentPage(id);
  // }

  // function nextPage() {
  //   if (currentPage !== npages) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // }
})

export default ExchangeTable;
