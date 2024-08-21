import React from 'react';
import Header from '../Components/Header/Header';
import data from '../Pages/Dashboard'
import Kycdetails from '../Components/Kyc/Kycdetails';
import useFetch from '../Api/UserListApi';


function DashboardKyc() {
  const {
    response: data,
    loading: loadingUserData,
    error: errorforUser,
  } = useFetch("http://103.181.21.93:8099/api/v1/admin/user/list");

  return (
    <>
    <Header/>
    <div className='mx-auto px-20 container '>
        
           <Kycdetails data={data}/>

        

    </div>
    </>
  )
}

export default DashboardKyc