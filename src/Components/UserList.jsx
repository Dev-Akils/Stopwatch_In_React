import React, { useRef, useState } from "react";

import UserList2 from "./UserList2";
import UserList3 from "./UserList3";
function UserList({
  data,
  onEmailVerifiedClick, onNotVerifiedClick, onActiveClick, onInactiveClick
   
 

}) {
  const totalUsers = data ? data.length : 0;
  const isActive = data ? data.filter((user) => user.isActive).length : 0;
  const inActive = data ? data.filter((user) => !user.isActive).length : 0;
  const verified = data ? data.filter((user) => user.emailVerified).length : 0;

  const notVeri = data ? data.filter((user) => !user.emailVerified).length : 0;

  
  return (
    <>
      <div className="px-10 py-10 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 xs:grid-cols-4 gap-4 mt-5">
          <div className="bg-blue-300 p-6 flex flex-col rounded-lg mb-4">
            <p>Total Users: {totalUsers}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex flex-col py-2">
                <p>Active Users</p>
                <h2 
                onClick={onActiveClick}>
                 
                  {isActive}
                </h2>
                {/* {isDataVisible &&
                  active.length > 0 &&
                  active.map((e, index) => <h3 key={index}>{e.username}</h3>)} */}
              </div>
              <div className="flex flex-col py-2 text-center">
                <p>Inactive Users</p>
                <h2 onClick={onInactiveClick} >{inActive}</h2>
                {/* {isDataVisible1&& active1.length>0&&active1.map(e=><h3>{e.username}</h3>)} */}
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-slate-50 p-6 rounded-lg">
            <p>Email Verification:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col py-2">
                <p>Verified</p>
                <h3 onClick={onEmailVerifiedClick}>{verified}</h3>
                {/* {isEmail&&email.length>0 && email.map(e=><h3>{e.username}</h3>)} */}
              </div>
              <div className="flex flex-col py-2 text-center">
                <p>Not Verified</p>
                <h3 onClick={onNotVerifiedClick}>{notVeri}</h3>
                {/* {isEmail1&& email1.length>0 && email1.map(e=><h2>{e.username}</h2>)} */}
              </div>
            </div>
          </div>
          <div>
            <UserList2 data={data} />
          </div>
          <div>
            <UserList3 />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserList;
