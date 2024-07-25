// import React, { useEffect,useState } from 'react';
// import axios from 'axios';
// import DataTable from '../Components/Table/DataTable';

// function TableApi() {
//     const [userList, setUserList] = useState([]);

//     useEffect(() => {
//       const fetchUserList = async () => {
//         try {
//           const response = await axios.post(
//             "http://103.181.21.93:8099/api/v1/admin/user/list",
//             {
//               username: "newuser",
//               email: "newuser@example.com",
//               password: "securepassword",
//             }
//           );
//           setUserList(response.data.data); 
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//         }
//       };
  
//       fetchUserList();
//     }, []);
  
//   return (
//     <>
//      <DataTable userList={userList} />
//     </>
//   )
// }

// export default TableApi