import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { BsTrash3Fill } from "react-icons/bs";
import Modal from '../components/Modal';
import {deleteUser, getUsers} from '../api/auth';
import toast from "react-hot-toast";

const UsersTable = ({ users }) => {
const [modalOpen, setModalOpen] = useState(false);
const [userId, setUserId] = useState();
const [userList, setUserList] =useState();


useEffect(() => {
  setUserList(users);
},[users])

const  deleteUserModal =  (id) => {
  setModalOpen(true);
  setUserId(id);
}

const onClickProceedDelete = async () =>{
   try{
    await deleteUser(userId);
    const result = await getUsers();
    setUserList(result.data);
    setModalOpen(false);
    toast.success("User is now deleted");
   }
   catch(error){
    toast.error(error.message);
   }
}
  return (
    <div>
      <Modal modalHeader='Delete' modalDetails='Are you sure you want to delete?' modalState={modalOpen} setModalState={setModalOpen} onClickContinue={ () =>  onClickProceedDelete()}/>
      <table className="table-fixed bg-white w-full border border-collapse border-slate-200">
        <thead>
        <tr className="bg-sky-100 text-sky-700">
          <th className="p-3 w-1/4">User</th>
          <th className="p-3 w-1/4">Update User</th>
        </tr>
        </thead>
        <tbody>
          {userList ? (
            userList.map((item, index) => (
              <tr className= " border border-slate-200" key={index}>
                <td className="px-6">
                  <Avatar
                    image={item.image}
                    userName={item.email}
                    userRole={item.role}
                  />{" "}
                </td>
                <td>
                  <div className="flex justify-center w-full gap-5">
                    {" "}
                    <BsTrash3Fill size={15} onClick={() => deleteUserModal(item.id)} className="hover:cursor-pointer"/>
                  </div>
                </td>
              </tr>
            ))
          ) : (
           <></>
          )}
        </tbody>
      </table> 
      
      </div>
  );
};

export default UsersTable;
