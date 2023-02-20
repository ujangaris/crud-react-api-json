import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/users')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='container'>
      <h2>Crud App with JSON Serve</h2>
      <button className='btn btn-success'>Create +</button>
      <hr />
      <div className='table-responsive'>
        <table className='table table-striped table-hover text-center'>
          <thead className='table-dark'>
            <tr>
              <th>#</th>
              <th>First</th>
              <th>Last</th>
              <th>Handle</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <th scope='row'>{d.id}</th>
                <td>{d.name}</td>
                <td>{d.username}</td>
                <td>{d.email}</td>
                <td>
                  <button className='btn btn-primary mx-2'>Update</button>
                  <button className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
