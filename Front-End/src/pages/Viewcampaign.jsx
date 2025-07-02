import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // use react-router-dom
import { useNavigate } from 'react-router';
import styles from '../styles/Viewcampaign.module.css'; // path based on your structure
import { TrendingUp } from 'lucide-react';

function Viewcampaign() {
  const token = localStorage.getItem("token");
  const [data, setdata] = useState([]);
  const navigate = useNavigate();

  const gotopayment = (id) => {
    navigate(`/payment/${id}`);
  };
  const logout = () => {
    localStorage.removeItem("token");
    alert("Logout Successfully");
    navigate('/');
  };

  const viewcampaign = async () => {
    try {
      const { data: response } = await axios.get('http://localhost:4000/api/user/adminapprovedcampaign', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      setdata(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchdata = async () => {
      await viewcampaign();
    };
    fetchdata();
  }, []);

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
      <div className={styles.tableContainer}>
        <h1>Campaigns</h1>
        <Link to="/userdashboard">
          <button>Back To Dashboard</button>
        </Link>
        <br /><br />
         <div className={styles.cardGrid}>
      {data.map((camp) => (
        <div className={styles.card} key={camp._id}>
          <h2 className={styles.cardTitle}>{camp.title}</h2>
          <p><strong>Description:</strong> {camp.description}</p>
          <p><strong>Creator:</strong> {camp.creatorname}</p>
          <p><strong>Status:</strong> {camp.status}</p>
          <p><strong>Goal:</strong> ₹{camp.goalamount}</p>
          <p><strong>Raised:</strong> ₹{camp.raisedamount}</p>
          <button onClick={() => gotopayment(camp._id)}>Donate</button>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
}

export default Viewcampaign;
