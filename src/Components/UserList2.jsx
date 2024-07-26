import React from 'react';

import useFetch2 from '../Api/UserList2Api';
function UserList2() {

 const {response,loading,error}=useFetch2("http://103.181.21.93:8099/api/v1/admin/totalSubscription");

//  console.log("TableApi",response)
  return (
    <>
   <div className='flex flex-col p-6 bg-blue-200 rounded-lg'>
      {response && response.TotalAmount && response.TotalAmount.map((e, index) => (
        <div key={index} className='mb-4'>
          <p>Total Subscription:</p>
          <h3>{e.Total}</h3>
        </div>
      ))}
      {response && response.data && response.data.map((e) => (
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
