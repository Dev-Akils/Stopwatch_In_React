import React, { useState,useRef,useEffect } from "react";
import UserList from "../Components/UserList";
import Chart from "../Components/Chart";

import useFetch from "../Api/UserListApi";
import StackTable from "../Components/Table/DataTable1";
import Header from "../Components/Header/Header";
function Dashboard() {
  const {
    response: data,
    loading,
    error,
  } = useFetch("http://103.181.21.93:8099/api/v1/admin/user/list");
  
  const [selectedData, setSelectedData] = useState([]);
  const exchangeTableRef = useRef(null);
  
  useEffect(() => {
   if (data) {
      setSelectedData(data);
    }
  }, [data]);

  
  const handleEmailVerifiedClick = () => {
    const filteredData = data.filter(e => e.emailVerified);
    setSelectedData(filteredData);
    if (exchangeTableRef.current) {
      exchangeTableRef.current.updateData(filteredData);
    }
  };

  const handleNotVerifiedClick = () => {
    const filteredData = data.filter(e => !e.emailVerified);
    setSelectedData(filteredData);
    if (exchangeTableRef.current) {
      exchangeTableRef.current.updateData(filteredData);
    }
  };

  const handleActiveClick = () => {
    const filteredData = data.filter(e => e.isActive);
    setSelectedData(filteredData);
    if (exchangeTableRef.current) {
      exchangeTableRef.current.updateData(filteredData);
    }
  };

  const handleInactiveClick = () => {
    const filteredData = data.filter(e => !e.isActive);
    setSelectedData(filteredData);
    if (exchangeTableRef.current) {
      exchangeTableRef.current.updateData(filteredData);
    }
  };
  return (
    <><Header />
      <UserList
        data={data}
        onEmailVerifiedClick={handleEmailVerifiedClick}
        onNotVerifiedClick={handleNotVerifiedClick}
        onActiveClick={handleActiveClick}
        onInactiveClick={handleInactiveClick}
      />
      <Chart/>
     
      <StackTable ref={exchangeTableRef}       //DataTable1
        data={selectedData}/>
    </>
  );
}

export default Dashboard;
