import React,{useState,useEffect,useMemo} from 'react';
import axios from 'axios'
function UserList3() {

  const [data, setData] = useState([]);

    
  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await axios.get(
          "http://103.181.21.93:8099/api/v1/admin/totalRoyality"
        );
        setData(response.data.data); 
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserList();
  }, []);

  const dataAvailable = data && data.data && Array.isArray(data.data);
  const data1 = dataAvailable ? data.data : [];
  
  // Calculate Totalamount using useMemo for optimization
  const Totalamount = useMemo(() => {
    return data1.reduce((sum, item) => sum + item.amount, 0);
  }, [data1]);

  console.log("Total Amount:", Totalamount);
 
  return (
    <>
   <div className='flex flex-col p-6 bg-slate-100'>
      <p>Royalists Amt:</p>
      {data && data.TotalAmount.map((e)=><h2>{e.Total}</h2>)}
      {/* {dataAvailable && data1.map((e, index) => (
        <h2 key={index}>{Totalamount}+{e.amount}</h2>
      ))} */}
      <h2>The Total of User's Amount:{Totalamount}</h2>
    </div>
    </>
  );
}

export default UserList3;
