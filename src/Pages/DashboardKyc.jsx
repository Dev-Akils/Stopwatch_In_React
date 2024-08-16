import React from 'react';
import Header from '../Components/Header/Header';
import SubHeader from '../Components/Kyc/SubHeader';


function DashboardKyc() {
  return (
    <>
    <Header/>
    <div className='mx-auto px-20 container '>
        <div className='flex flex-column'>
            <SubHeader/>

        </div>

    </div>
    </>
  )
}

export default DashboardKyc