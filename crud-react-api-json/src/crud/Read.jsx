import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import image from '../assets/image/user.png';

function Read() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className='container mt-5'>
      <div className='card' style={{ width: '18rem' }}>
        <img src={`${image}`} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{data.name}</h5>
          <p className='card-text'>
            {data.email} {data.username}
          </p>
          <Link to='/' className='btn btn-success'>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Read;
