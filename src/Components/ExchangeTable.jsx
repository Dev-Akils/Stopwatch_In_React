import React,{useState,useEffect} from 'react';
// import {userList} from '../Api/TableApi';
import DataTable2 from './Table/DataTable2';
import axios from 'axios';

function ExchangeTable() {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
      const fetchUserList = async () => {
        try {
          const response = await axios.post(
            "http://103.181.21.93:8099/api/v1/admin/user/list",
            {
              username: "newuser",
              email: "newuser@example.com",
              password: "securepassword",
            }
          );
          setUserList(response.data.data); 
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
  
      fetchUserList();
    }, []);
  

  return (
    <>
    <DataTable2 data={userList} />
    </>
  )
}

export default ExchangeTable