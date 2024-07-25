import React,{useState,useEffect} from 'react';
import axios from 'axios'
function UserList2() {

  const [data, setData] = useState([]);

    
  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await axios.get(
          "http://103.181.21.93:8099/api/v1/admin/totalSubscription"
        );
        setData(response.data.data); 
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserList();
  }, []);


 
  return (
    <>
   <div className='flex flex-col p-6 bg-blue-200 rounded-lg'>
      {data && data.TotalAmount && data.TotalAmount.map((e, index) => (
        <div key={index} className='mb-4'>
          <p>Total Subscription:</p>
          <h3>{e.Total}</h3>
        </div>
      ))}
      {data && data.data && data.data.map((e) => (
        <div key={e._id} className='mb-4'>
          <p>Level ID: {e._id}</p>
          <p>Sum: {e.sum}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default UserList2;
