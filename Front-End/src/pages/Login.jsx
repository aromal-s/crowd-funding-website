import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import styles from '../styles/Login.module.css'; // Adjust the path as needed
import { TrendingUp } from 'lucide-react';

function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const navigate = useNavigate();

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/user/login", {
        email,
        password
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        setMessage("Login Successful");
        setMessageType("success");

        setTimeout(() => {
          if (response.data.user.isadmin === false) {
            navigate('/userdashboard');
          } else {
            navigate('/admindashboard');
          }
        }, 1500);
      } else {
        setMessage("Login Failed: Invalid Email or Password");
        setMessageType("error");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
      setMessageType("error");
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoBox}>
            <TrendingUp size={20} color="white" />
          </div>
          <span>Crowdfunding.com</span>
        </div>
      </header>

      <div className={styles.loginWrapper}>
        <div className={styles.loginBox}>
          {message && (
            <div className={`${styles.formAlert} ${messageType === 'success' ? styles.success : styles.error}`}>
              {message}
            </div>
          )}
          <h2 className={styles.formTitle}>Login</h2>
          <form onSubmit={sendData}>
            <label>Email:</label>
            <input type='email' onChange={(e) => setemail(e.target.value)} required />
            <label>Password:</label>
            <input type='password' onChange={(e) => setpassword(e.target.value)} required />
            <input type='submit' value='Login' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
