import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  // pasang Navigate
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:3000/users')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  // pasang handle delete
  const handleDelete = (id) => {
    // pasang confirm untuk delete
    const confirmed = window.confirm('Do you want to delete?');
    if (confirmed) {
      axios
        .delete(`http://localhost:3000/users/${id}`)
        .then((res) => {
          window.alert('Data berhasil dihapus!');
          // update state dengan method filter
          setData(data.filter((item) => item.id !== id));
          navigate('/');
        })
        .catch((err) => {
          console.log(err);
          window.alert('Terjadi kesalahan saat menghapus data');
        });
    }
  };
  return (
    <div className='container mt-5'>
      <h2>Crud App with JSON Server</h2>
      <Link to='/create' className='btn btn-success'>
        Create +
      </Link>
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
                  <Link to={`/update/${d.id}`} className='btn btn-primary mx-2'>
                    Update
                  </Link>
                  {/* pasang handleDelete */}
                  <button
                    onClick={(e) => handleDelete(d.id)}
                    className='btn btn-danger'
                  >
                    Delete
                  </button>
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
