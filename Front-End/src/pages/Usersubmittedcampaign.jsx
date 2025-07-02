import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // use react-router-dom instead
import axios from 'axios';
import styles from '../styles/Usersubmittedcampaign.module.css'; // adjust path as needed
import { TrendingUp } from 'lucide-react';

function Usersubmittedcampaign() {
  const token = localStorage.getItem("token");
  const [data, setdata] = useState([]);
  const logout = () => {
    localStorage.removeItem("token");
    alert("Logout Successfully");
    navigate('/');
  };

  const mycampaign = async () => {
    try {
      const { data: response } = await axios.get('http://localhost:4000/api/user/usersubmittedcampaign', {
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
      await mycampaign();
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
        <h1>My Campaigns</h1>
        <Link to="/userdashboard"><button>Back To Dashboard</button></Link>
        <br /><br />
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Goal Amount</th>
              <th>Raised Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((camp) => (
              <tr key={camp._id}>
                <td>{camp.title}</td>
                <td>{camp.description}</td>
                <td>{camp.status}</td>
                <td>₹{camp.goalamount}</td>
                <td>₹{camp.raisedamount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Usersubmittedcampaign;
