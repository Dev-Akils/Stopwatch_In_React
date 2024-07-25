import React,{useState,useEffect} from 'react';
import axios from 'axios';
import UserList2 from './UserList2';
import UserList3 from './UserList3';
function UserList() {

  const [list, setList] = useState([]);

    
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
        setList(response.data.data); 
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserList();
  }, []);


  console.log("List",list)
  const totalUsers = list ? list.length : 0;
  const isActive = list ? list.filter(user => user.isActive).length : 0;
  const inActive = list ? list.filter(user => !user.isActive).length : 0;
  const verified = list ? list.filter(user => user.emailVerified).length : 0;
 
  const notVeri = list?list.filter(user => !user.emailVerified).length:0;

  return (
    <>
    <div className='px-10 py-10 mx-auto'>
    <div className='grid grid-cols-2 md:grid-cols-4 xs:grid-cols-4 gap-4 mt-5'>
      <div className="bg-blue-300 p-6 flex flex-col rounded-lg mb-4">
        <p>Total Users: {totalUsers}</p>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="flex flex-col py-2">
            <p>Active Users</p>
            <h2>{isActive}</h2>
          </div>
          <div className="flex flex-col py-2 text-center">
            <p>Inactive Users</p>
            <h2>{inActive}</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-slate-50 p-6 rounded-lg">
        <p>Email Verification:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col py-2">
            <p>Verified</p>
            <h3>{verified}</h3>
          </div>
          <div className="flex flex-col py-2 text-center">
            <p>Not Verified</p>
            <h3>{notVeri}</h3>
          </div>
        </div>
      </div>
      <div>
        <UserList2/>
      </div>
      {/* <div>
        <UserList3/></div> */}
        </div></div>
    </>
  );
}

export default UserList;
