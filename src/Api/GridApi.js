// import React, { useEffect,useState } from 'react';
// import axios from 'axios';
// import UserList from '../Components/UserList';

// function GridApi() {
//     const [list, setList] = useState([]);

    
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
//           setList(response.data.data); 
//         } catch (error) {
//           console.error("Error fetching user data:", error);
//         }
//       };
  
//       fetchUserList();
//     }, []);
  
//   return (
//     <>
//      <UserList list={list} />
//     </>
//   )
// }

// export default GridApi