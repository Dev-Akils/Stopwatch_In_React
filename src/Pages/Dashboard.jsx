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
  const [active, setActive] = useState([]);
  const [isDataVisible, setIsDataVisible] = useState(false);
  const [active1, setActive1] = useState([]);
  const [isDataVisible1, setIsDataVisible1] = useState(false);
  const [email, setEmail] = useState([]);
  const [isEmail, setIsEmail] = useState([]);
  const [email1, setEmail1] = useState([]);
  const [isEmail1, setIsEmail1] = useState([]);

  const emailClick2 = () => {
    if (data) {
      const filter2 = data.filter((e) => e.emailVerified);
      setEmail(filter2);
    }
    setIsEmail((e) => !e);
  };
  const emailClick22 = () => {
    if (data) {
      const filter = data.filter((e) => !e.emailVerified);
      setEmail1(filter);
    }
    setIsEmail1((e) => !e);
  };

  const activeClick1 = () => {
    // Ensure data is available and filter it
    if (data) {
      const filter1 = data.filter((e) => e.isActive); // Adjust filtering as needed
      setActive(filter1); // Set the filtered data to active2
    }
    // Toggle visibility state
    setIsDataVisible((prev) => !prev);
  };
  const activeClick11=()=>{
    if(data){
      const filter=data.filter(e=>!e.isActive);
      setActive1(filter);
      
    }
    setIsDataVisible1(e=>!e);
  }

  return (
    <>
      <UserList
        data={data}
        emailClick2={emailClick2}
        emailClick22={emailClick22}
        activeClick1={activeClick1}
        activeClick11={activeClick11}
        isDataVisible1={isDataVisible1}
        email={email}
        email1={email1}
        active={active}
        active1={active1}
        isDataVisible ={isDataVisible }
        isEmail={isEmail}
        isEmail1={isEmail1}
       />
      <Chart />
      <ExchangeTable data={data} email={email}
        email1={email1}
        active={active}
        active1={active1}/>
    </>
  );
}

export default Dashboard;
