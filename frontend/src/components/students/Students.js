import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";
import { FaTrash, FaPen } from "react-icons/fa";
import { IconButton } from '@mui/material';
import "./student.css";
const Students = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    axios({
      method: "GET",
      url: "https://dummyjson.com/users",
    })
      .then((res) => {
        setUsers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(users);

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
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john@gmail.com</td>
            <td>73077477744</td>
            <td>karthi.lorem.com</td>
            <td>Deckow</td>
            <td>
              <IconButton aria-label="update" className="table-icon">
                <FaPen />
              </IconButton>
            </td>
            <td>
              <IconButton aria-label="delete" className="table-icon">
                <FaTrash />
              </IconButton>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>John Doe</td>
            <td>john@gmail.com</td>
            <td>73077477744</td>
            <td>karthi.lorem.com</td>
            <td>Deckow</td>
            <td>
              <IconButton aria-label="update" className="table-icon">
                <FaPen />
              </IconButton>
            </td>
            <td>
              <IconButton aria-label="delete" className="table-icon">
                <FaTrash />
              </IconButton>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Students;
