import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { TrendingUp } from 'lucide-react';
import styles from '../styles/Register.module.css'; // 🔹 Use this new CSS module

function Register() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/user/register", {
        name,
        email,
        password
      });

      if (response.data.token) {
        alert("Registration Successful. Please login!");
        navigate('/');
      } else {
        alert("User already exists");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.pageWrapper}>
        <header style={{
              backgroundColor: '#2563eb',
              padding: '1rem 0',
              position: 'sticky',
              top: 0,
              zIndex: 1000,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 2rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'white'
                }}>
                  <div style={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: '#22c55e',
                    borderRadius: '4px',
                    marginRight: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <TrendingUp size={20} color="white" />
                  </div>
                  Crowdfunding.com
                </div>
              </div>
            </header>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Registeration</h2>
        <form onSubmit={sendData} className={styles.form}>
          <label>Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
          />
          <label>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />
          <button type='submit' className={styles.submitBtn}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
