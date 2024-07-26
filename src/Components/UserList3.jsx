import React,{useState,useEffect,useMemo} from 'react';
import axios from 'axios'
import useFetch1 from '../Api/UserList3Api';
function UserList3() {

 
    
const { response, loading, error }=useFetch1("http://103.181.21.93:8099/api/v1/admin/totalRoyality");
 console.log("useList3",response);

   const dataAvailable = response && response.data && Array.isArray(response.data);
  const data1 = dataAvailable ? response.data : [];
  
  // Calculate Totalamount using useMemo for optimization
  const Totalamount = useMemo(() => {
    return data1.reduce((sum, item) => sum + item.amount, 0);
  }, [data1]);

  console.log("Total Amount:", Totalamount);
 
  return (
    <>
   <div className='flex flex-col p-8 bg-slate-100 rounded-sm '>
      <p className='py-3'>Royalists Amt:</p>
      {response && response.TotalAmount.map((e)=><h2 className='py-3'>Total Amount:{e.Total}</h2>)} 
     {/* {dataAvailable && data1.map((e, index) => (
        <h2 key={index}>{Totalamount}+{e.amount}</h2>
      ))} */}
      <h2 className='py-3'>The Total of User's Amount:{Totalamount}</h2>
    </div>
    </>
  );
}

export default UserList3;
