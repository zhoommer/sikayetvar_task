import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from 'reactstrap';
import './student.css';
const Students = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    axios({
      method: "GET",
      url: "https://dummyjson.com/users",
    }).then((res) => {
      setUsers(res);
    });
  };
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <th scope="row">1</th>
              <td>{user.firstName}</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Students;
