import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "reactstrap";
import "./student.css";
const Students = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => {
        res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);

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
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@gmail.com</td>
              <td>73077477744</td>
              <td>karthi.lorem.com</td>
              <td>Deckow</td>
            </tr>
            <tr>
              <td>2</td>
              <td>John Doe</td>
              <td>john@gmail.com</td>
              <td>73077477744</td>
              <td>karthi.lorem.com</td>
              <td>Deckow</td>
            </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Students;
