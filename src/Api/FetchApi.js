// import React,{useState,useEffect} from 'react';
// import axios from 'axios'
// const useFetch=(url)=>{
//     const [response,setResponse]=useState([]);
//     // useEffect(()=>{
//     //     fetch(url)
//     //     .then((res)=>res.json())
//     //     .then((data)=>setResponse(data));
//     // },[]);
//     // return response;
//     useEffect(() => {
//         const fetchUserList = async () => {
//           try {
//             const response = await axios.post(
//               url,
//               {
//                 username: "newuser",
//                 email: "newuser@example.com",
//                 password: "securepassword",
//               }
//             );
//             setResponse(response.data.data); 
//           } catch (error) {
//             console.error("Error fetching user data:", error);
//           }
//         };
    
//         fetchUserList();
//       }, []);
// }
// export default useFetch;