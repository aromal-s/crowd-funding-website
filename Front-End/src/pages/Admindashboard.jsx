import React from 'react';
import { useNavigate } from 'react-router';
import styles from '../styles/Admindashboard.module.css'; // Adjust path as needed
import { Menu, X, TrendingUp, Users, DollarSign, Calendar, ArrowRight } from 'lucide-react';

function Admindashboard() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const viewallcampaign = () => navigate('/allcampaign');
  const approvedcampaign = () => navigate('/approvedcampaign');
  const rejectedcampaign = () => navigate('/rejectedcampaign');
  const pendingcampaign = () => navigate('/pendingcampaign');
  const createcampaign = () => navigate('/createcampaign');
  const logout = () => {
    localStorage.removeItem("token");
    alert("Logout Successfully");
    navigate('/');
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
      <div className={styles.dashboardBox}>
        <h2 className={styles.title}>Welcome, Admin!</h2>
        <div className={styles.buttons}>
          <button onClick={viewallcampaign}>View All Campaigns</button>
          <button onClick={approvedcampaign}>View Approved Campaigns</button>
          <button onClick={rejectedcampaign}>View Rejected Campaigns</button>
          <button onClick={pendingcampaign}>View Pending Campaigns</button>
           <button onClick={createcampaign}>+ Create Campaign</button>
        </div>
      </div>
    </div>
  );
}

export default Admindashboard;
