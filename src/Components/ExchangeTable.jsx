import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

function ExchangeTable({ data, email, email1, active, active1 }) {
  const safeData = Array.isArray(data) ? data : [];
  
  // Filter data based on props
  const filteredData = safeData.filter((user) =>
    (email ? user.email?.includes(email) : true) &&
    (email1 ? user.email?.includes(email1) : true) &&
    (active !== undefined ? user.active === active : true) &&
    (active1 !== undefined ? user.active === active1 : true)
  );
console.log("filteredDataaa",filteredData)
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredData.slice(firstIndex, lastIndex);
  const npages = Math.ceil(filteredData.length / recordsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  return (
    <div className="flex-col">
      <div className="background">
        <table className="table">
          <thead className="">
            <tr>
              <th className="py-3 bg-gray-100">ID</th>
              <th className="py-3 bg-gray-100">UserName</th>
              <th className="py-3 bg-gray-100">Email</th>
              <th className="py-3 bg-gray-100">UID</th>
              <th className="py-3 bg-gray-100">Country</th>
              <th className="py-3 bg-gray-100">Register On</th>
              <th className="py-3 bg-gray-100">Status</th>
              <th className="py-3 bg-gray-100">Manage</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {records.map((e, i) => (
              <tr key={i} className="cursor-pointer duration-200">
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
      <div className="items-center container flex mx-auto">
        <nav>
          <ul className="flex gap-4">
            <li className="border-2 border-gray-200 p-1 rounded-sm hover:scale-105">
              <a href="#" onClick={prePage}>Prev</a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a href="#" onClick={() => changePage(n)}>{n}</a>
              </li>
            ))}
            <li className="border-2 border-gray-200 rounded-sm hover:scale-105 p-1">
              <a href="#" onClick={nextPage}>Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npages) {
      setCurrentPage(currentPage + 1);
    }
  }
}

export default ExchangeTable;
