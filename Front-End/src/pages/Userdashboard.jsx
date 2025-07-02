import React from 'react';
import { useNavigate } from 'react-router';
import styles from '../styles/Userdashboard.module.css'; // adjust if your folder path is different
import { TrendingUp } from 'lucide-react';
function Userdashboard() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    alert("Logout Successfully");
    navigate("/");
  };

  const createcampaign = () => navigate('/createcampaign');
  const viewcampaign = () => navigate('/viewcampaign');
  const mycampaign = () => navigate('/mycampaign');

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

      <div className={styles.dashboardContent}>
        <div className={styles.welcome}>Welcome! {user.name}</div>
        <div className={styles.buttonGroup}>
          <button className={styles.btn} onClick={createcampaign}>+ Create Campaign</button>
          <button className={styles.btn} onClick={viewcampaign}>Campaigns</button>
          <button className={styles.btn} onClick={mycampaign}>My Campaigns</button>
          
        </div>
      </div>
    </div>
  );
}

export default Userdashboard;
