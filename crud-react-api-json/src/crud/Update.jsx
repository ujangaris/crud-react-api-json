import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Update() {
  // deklarasi hook yang dapatkan nilai dari parameter yang diberikan di URL
  const { id } = useParams();
  // deklarasi hook dengan object
  const [inputData, setInputData] = useState({
    id: id,
    name: '',
    username: '',
    email: '',
    password: '',
  });
  // pasang navigate
  const navigate = useNavigate();

  // useEffect untuk mengambil data dari API berdasarkan id
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  // function handleSubmit untuk udate data
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/users/${id}`, inputData)
      .then((res) => {
        alert('Data berhasil diupdate!');
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        alert('Terjadi kesalahan saat menyimpan data');
      });
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-8 mx-auto'>
          <div className='card'>
            <div className='card-header'>
              <h3>Update Data</h3>
            </div>
            <div className='card-body'>
              <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='name' className='sr-only'>
                    Nama
                  </label>
                  <input
                    type='hidden'
                    id='id'
                    className='form-control'
                    value={inputData.id || ''}
                    onChange={(e) =>
                      setInputData({ ...inputData, id: e.target.value })
                    }
                  />
                  <input
                    type='text'
                    id='name'
                    className='form-control'
                    placeholder='Nama'
                    required
                    autoFocus
                    value={inputData.name || ''}
                    onChange={(e) =>
                      setInputData({ ...inputData, name: e.target.value })
                    }
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='username' className='sr-only'>
                    Username
                  </label>
                  <input
                    type='text'
                    id='username'
                    className='form-control'
                    placeholder='Nama Pengguna'
                    required
                    autoFocus
                    value={inputData.username || ''}
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        username: e.target.value,
                      })
                    }
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='inputEmail' className='sr-only'>
                    Alamat Email
                  </label>
                  <input
                    type='email'
                    id='inputEmail'
                    className='form-control'
                    placeholder='Alamat Email'
                    required
                    autoFocus
                    value={inputData.email || ''}
                    onChange={(e) =>
                      setInputData({ ...inputData, email: e.target.value })
                    }
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='inputPassword' className='sr-only'>
                    Kata Sandi
                  </label>
                  <input
                    type='password'
                    id='inputPassword'
                    className='form-control'
                    placeholder='Kata Sandi'
                    required
                    value={inputData.password || ''}
                    onChange={(e) =>
                      setInputData({ ...inputData, password: e.target.value })
                    }
                  />
                </div>
                <button
                  className='btn btn-md btn-primary btn-block'
                  type='submit'
                >
                  Update Data
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;
