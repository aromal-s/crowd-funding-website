import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, TrendingUp, Users, DollarSign, Calendar, ArrowRight } from 'lucide-react';
import img from "../styles/bg.jpg"
function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
     
    }}>

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
            <Link to='/register'><button style={{
             padding: '0.5rem 1rem',
              backgroundColor: '#22c55e',
              border: 'none',
              borderRadius: '4px',
              color: 'white',
              cursor: 'pointer',
              fontWeight: '500',
            }}>
              REGISTER
            </button></Link>

            <Link to='/login'>
            <button style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#22c55e',
              border: 'none',
              borderRadius: '4px',
              color: 'white',
              cursor: 'pointer',
              fontWeight: '500'
            }}>
              SIGN IN
            </button></Link>
           
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Home;
