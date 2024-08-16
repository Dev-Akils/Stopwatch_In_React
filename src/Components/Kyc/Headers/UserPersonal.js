import React from "react";
import useFetch from "../../../Api/UserListApi";

function UserPersonal() {
  const {
    response: data,
    loading: loadingUserData,
    error: errorforUser,
  } = useFetch("http://103.181.21.93:8099/api/v1/admin/user/list");
  const userList = data?.data || [];
  console.log("UserPersonal" + userList);
  return (
    <>
      <div className="mx-auto container px-4">
        <h2>Personal Information</h2>
        <div className="">
          {userList.map((e) => {
            return (
              <ul key={e.id} className="">
                <li>Name:{e.username}</li>
                <li>Email:{e.email}</li>
                <li>Mobile:{e.mobile}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UserPersonal;
