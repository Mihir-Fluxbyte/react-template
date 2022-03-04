import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { companyAction } from "../../@store/slices/companySlice";
import { userAction } from "../../@store/slices/userSlice";

function Dashboard() {
    const userdata =  useSelector(state=>state.user);
    const companydata =  useSelector(state=>state.company);
    const d = useDispatch();
    console.log(userdata, companydata);
    const addUserData = () => {
        d(userAction.add({id: '2', name: 'abc', email: 'a@b.com'}))
    };
    const addCompanyData = () => {
        d(companyAction.add({id: '1', name: 'c1', email: 'c1@test.com'}))
        d(companyAction.add({id: '2', name: 'c2', email: 'c2@test.com'}))
    };
    const deleteCompany = () => {
        d(companyAction.destroy({id: '1'}))
    }

  return (
    <>
      <div>Dashboard</div>
      <button onClick={addUserData}>Add User Data</button>
      <button onClick={addCompanyData}>Add Company Data</button>
      <button onClick={deleteCompany}>delete Company Data</button>
    </>
  );
}

export default Dashboard;
