import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import styles from '../styles/Payment.module.css'; // Make sure this path is correct
import { TrendingUp } from 'lucide-react';
function Payment() {
  const [amount, setamount] = useState('');
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { id } = useParams();
  const logout = () => {
    localStorage.removeItem("token");
    alert("Logout Successfully");
    navigate('/');
  };

  const donate = async () => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/donate/${id}`,
        { amount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      alert("Donated Successfully");
      setamount('');
      navigate('/userdashboard');
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
      
                <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      
      
                  <button style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#22c55e',
                    border: 'none',
                    borderRadius: '4px',
                    color: 'white',
                    cursor: 'pointer',
                    fontWeight: '500'
                  }} onClick={logout}>
                    Logout
                  </button>
                 
                </nav>
              </div>
            </header>
      <div className={styles.paymentBox}>
        <h2 style={{ marginBottom: '20px', color: 'black' }}>Payment</h2>
        <input
          type='number'
          value={amount}
          onChange={(e) => setamount(e.target.value)}
          placeholder='Enter the amount'
          required
        />
        <button onClick={donate}>Pay</button>
      </div>
    </div>
  );
}

export default Payment;
