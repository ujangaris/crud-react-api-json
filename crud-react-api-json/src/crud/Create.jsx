// rfce
import React, { useState } from 'react';
import axios from 'axios'; // import axios
import { useNavigate } from 'react-router-dom';

function Create() {
  // deklarasi hook dengan object
  const [inputData, setInputData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  // pasang handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3000/users', inputData) // tambahkan axios.post untuk mengirim data
      .then((res) => {
        alert('Data berhasil disimpan!');
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
              <h3>Add Data</h3>
            </div>
            <div className='card-body'>
              <form className='form-signin' onSubmit={handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='name' className='sr-only my-2'>
                    Nama
                  </label>
                  <input
                    type='text'
                    id='name'
                    className='form-control'
                    placeholder='Nama'
                    required
                    autoFocus
                    onChange={(e) =>
                      setInputData({ ...inputData, name: e.target.value })
                    }
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='username' className='sr-only my-2'>
                    Username
                  </label>
                  <input
                    type='text'
                    id='username'
                    className='form-control'
                    placeholder='Nama Pengguna'
                    required
                    autoFocus
                    onChange={(e) =>
                      setInputData({
                        ...inputData,
                        username: e.target.value,
                      })
                    }
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='inputEmail' className='sr-only my-2'>
                    Alamat Email
                  </label>
                  <input
                    type='email'
                    id='inputEmail'
                    className='form-control'
                    placeholder='Alamat Email'
                    required
                    autoFocus
                    onChange={(e) =>
                      setInputData({ ...inputData, email: e.target.value })
                    }
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='inputPassword' className='sr-only my-2'>
                    Kata Sandi
                  </label>
                  <input
                    type='password'
                    id='inputPassword'
                    className='form-control'
                    placeholder='Kata Sandi'
                    required
                    onChange={(e) =>
                      setInputData({ ...inputData, password: e.target.value })
                    }
                  />
                </div>

                <button
                  className='btn btn-md btn-primary btn-block my-2 justify-content-end'
                  type='submit'
                >
                  Add Data
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
