import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // fixed import
import styles from '../styles/Allcampaigns.module.css'; // assuming CSS module
import { TrendingUp } from 'lucide-react';


function Allcampaigns() {
  const token = localStorage.getItem("token");
  const [data, setdata] = useState([]);
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem("token");
    alert("Logout Successfully");
    navigate('/');
  };


  const approved = async (id) => {
    try {
      const response = await axios.put(`http://localhost:4000/api/admin/${id}/approve`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.data.status === "approved") {
        alert("Campaign approved");
        viewallcampaign();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const rejected = async (id) => {
    try {
      const response = await axios.put(`http://localhost:4000/api/admin/${id}/reject`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (response.data.status === "rejected") {
        alert("Campaign rejected");
        viewallcampaign();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const viewallcampaign = async () => {
    try {
      const { data: response } = await axios.get("http://localhost:4000/api/admin/getcampaign", {
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
    viewallcampaign();
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
      <div className={styles.content}>
        <h2 className={styles.title}>All Campaigns</h2>
        <Link to="/admindashboard"><button className={styles.backBtn}>Back to Dashboard</button></Link>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Creator Name</th>
              <th>Status</th>
              <th>Goal Amount</th>
              <th>Raised Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((camp) => (
              <tr key={camp._id}>
                <td>{camp.title}</td>
                <td>{camp.description}</td>
                <td>{camp.creatorname}</td>
                <td>{camp.status}</td>
                <td>₹{camp.goalamount}</td>
                <td>₹{camp.raisedamount}</td>
                <td>
                  <button className={styles.approveBtn} onClick={() => approved(camp._id)}>Approve</button>
                  <button className={styles.rejectBtn} onClick={() => rejected(camp._id)}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Allcampaigns;
