import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import styles from '../styles/Createcampaign.module.css'; // adjust if needed
import { TrendingUp } from 'lucide-react';
function Createcampaign() {
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [goalamount, setgoalamount] = useState('');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    alert("Logout Successfully");
    navigate('/');
  };


  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const userdashboard = () => {
    if(user.isadmin===false){
      navigate('/userdashboard');
    }
    else{
      console.log(user);
      
      navigate('/admindashboard');
    }
    
  }

  const campaignsubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/createcampaign",
        { title, description, goalamount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (!response) {
        alert("Failed to create campaign");
      } else {
        alert("Campaign Created Successfully");
        settitle('');
        setdescription('');
        setgoalamount('');
      }
    } catch (error) {
      console.log(error);
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
      <div className={styles.formContainer}>
        <div className={styles.formBox}>
          <h2>Create Campaign</h2>
          <button className={styles.backBtn} onClick={userdashboard}>Back To Dashboard</button><br/><br/>
          <form onSubmit={campaignsubmit}>
            <label>Title:</label>
            <input type='text' value={title} onChange={(e) => settitle(e.target.value)} required />

            <label>Description:</label>
            <input type='text' value={description} onChange={(e) => setdescription(e.target.value)} required />

            <label>Goal Amount:</label>
            <input type='number' value={goalamount} onChange={(e) => setgoalamount(e.target.value)} required />

            <input type='submit' value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Createcampaign;
