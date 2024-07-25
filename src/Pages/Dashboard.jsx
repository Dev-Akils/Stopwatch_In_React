import React from 'react';
import UserList from '../Components/UserList';
import Chart from '../Components/Chart';
import ExchangeTable from '../Components/ExchangeTable';

function Dashboard() {
  return (
   <>
   
   <UserList/>
   <Chart/>
   <ExchangeTable/>
   </>
  )
}

export default Dashboard