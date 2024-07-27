import React, { useState } from "react";
import UserList from "../Components/UserList";
import Chart from "../Components/Chart";
import ExchangeTable from "../Components/ExchangeTable";
import useFetch from "../Api/UserListApi";

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
  const handleEmailVerifiedClick = () => {
    setEmailVerifiedData(data.filter(e => e.emailVerified));
  };

  const handleNotVerifiedClick = () => {
    setNotVerifiedData(data.filter(e => !e.emailVerified));
  };

  const handleActiveClick = () => {
    setActiveData(data.filter(e => e.isActive));
  };

  const handleInactiveClick = () => {
    setInactiveData(data.filter(e => !e.isActive));
  };


  return (
    <>
      <UserList
        data={data}
        onEmailVerifiedClick={handleEmailVerifiedClick}
        onNotVerifiedClick={handleNotVerifiedClick}
        onActiveClick={handleActiveClick}
        onInactiveClick={handleInactiveClick}
        // isDataVisible ={isDataVisible }
        // isEmail={email}
       />
      {/* <Chart /> */}
      <ExchangeTable data={data} 
       emailVerifiedData={emailVerifiedData}
       notVerifiedData={notVerifiedData}
       activeData={activeData}
       inactiveData={inactiveData}/>
    </>
  );
}

export default Dashboard;
