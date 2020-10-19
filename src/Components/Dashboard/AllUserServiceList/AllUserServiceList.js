import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DashboardMain from '../DashboardMain/DashboardMain';
const AllUserServiceList = () => {
  const [info, setInfo] = useState([])
  useEffect(() => {
    fetch('https://agile-taiga-09020.herokuapp.com/getUserService')
      .then(res => res.json())
      .then(result => setInfo(result))
  }, [])
  return (
    <div>
      <DashboardMain info={'All service list'} >
        <div className="service-container">
          <table className="table bg-white p-3">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Service</th>
                <th scope="col">Project Description</th>
              </tr>
            </thead>
            <tbody>
              {
                info.map(data =>
                  <tr>
                    <td>{data.userName}</td>
                    <td>{data.userEmail}</td>
                    <td>{data.serviceName}</td>
                    <td>{data.description}</td>
                    <td> <select className="btn-brand bg-success" > <option value="/">Pending</option> <option value="/">Approve</option> </select> </td>
                  </tr>)}
            </tbody>
          </table>
        </div>
      </DashboardMain>
    </div>
  );
};

export default AllUserServiceList;