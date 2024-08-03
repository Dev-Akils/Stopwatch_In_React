import React, { useState,useRef,useEffect } from "react";
import UserList from "../Components/UserList";
import Chart from "../Components/Chart";
import ExchangeTable from "../Components/ExchangeTable";
import useFetch from "../Api/UserListApi";
import DataTable1 from '../Components/Table/DataTable1';
import StackTable from "../Components/Table/DataTable1";
function Dashboard() {
  const {
    response: data,
    loading,
    error,
  } = useFetch("http://103.181.21.93:8099/api/v1/admin/user/list");
  
  const [emailVerifiedData, setEmailVerifiedData] = useState([]);
  const [notVerifiedData, setNotVerifiedData] = useState([]);
  const [activeData, setActiveData] = useState([]);
  const [inactiveData, setInactiveData] = useState([]);

  // Event Handlers
  // const handleEmailVerifiedClick = () => {
  //   setEmailVerifiedData(data.filter(e => e.emailVerified));
  // };

  // const handleNotVerifiedClick = () => {
  //   setNotVerifiedData(data.filter(e => !e.emailVerified));
  // };

  // const handleActiveClick = () => {
  //   setActiveData(data.filter(e => e.isActive));
  // };

  // const handleInactiveClick = () => {
  //   setInactiveData(data.filter(e => !e.isActive));
  // };
 
  const [selectedData, setSelectedData] = useState([]);
  const exchangeTableRef = useRef(null);
  
  // const exchangeTableRef = useRef(null);

  // // Event Handlers
  // const handleEmailVerifiedClick = () => {
  //   setSelectedData(data.filter(e => e.emailVerified));
  // };

  // const handleNotVerifiedClick = () => {
  //   setSelectedData(data.filter(e => !e.emailVerified));
  // };

  // const handleActiveClick = () => {
  //   setSelectedData(data.filter(e => e.isActive));
  // };

  // const handleInactiveClick = () => {
  //   setSelectedData(data.filter(e => !e.isActive));
  // };
  useEffect(() => {
    // Set the initial state to the full data set once it's loaded
    if (data) {
      setSelectedData(data);
    }
  }, [data]);

  // Event Handlers
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
    <>
      <UserList
        data={data}
        onEmailVerifiedClick={handleEmailVerifiedClick}
        onNotVerifiedClick={handleNotVerifiedClick}
        onActiveClick={handleActiveClick}
        onInactiveClick={handleInactiveClick}
      />
      <Chart/>
      {/* <ExchangeTable
        ref={exchangeTableRef}
        data={selectedData}
      /> */}
      <StackTable ref={exchangeTableRef}
        data={selectedData}/>
    </>
  );
}

export default Dashboard;
