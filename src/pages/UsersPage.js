import React, { useEffect, useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import UsersTable from "../components/UsersTable";
import Button from "../components/Button";
import {getUsers} from '../api/auth'


const UsersPage = () => {
const [user, setUser] = useState();

  const userList = async () =>{
    const result =  await getUsers();
    setUser(result.data);
  }
  
  useEffect(() => {
     userList();
  }, [])
  
  return (
    <AdminLayout>
      <div className="w-full p-5 items-center ">
        <div className="flex justify-between items py-1">
          <span className="text-lg font-semibold p-0">Users</span>
          <Button
            text="Add User"
            textColor="text-sky-700 font-semibold bg-sky-100"
          />
        </div>
        <UsersTable
          users={
          user}
        />
      </div>
      
    </AdminLayout>
  );
};

export default UsersPage;
