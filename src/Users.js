import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/felhasznalok')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Hiba történt az adatok lekérésekor');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div style={styles.content}>
        <h1>Felhasználók</h1>
        {loading && <p>Betöltés...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && !error && (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Név</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Magasság (cm)</th>
                <th style={styles.th}>Súly (kg)</th>
                <th style={styles.th}>Nem</th>
                <th style={styles.th}>Nem szeret</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.fel_id} style={styles.tr}>
                  <td style={styles.td}>{user.fel_id}</td>
                  <td style={styles.td}>{user.felh_nev}</td>
                  <td style={styles.td}>{user.felh_email}</td>
                  <td style={styles.td}>{user.felh_mag}</td>
                  <td style={styles.td}>{user.felh_suly}</td>
                  <td style={styles.td}>{user.nem}</td>
                  <td style={styles.td}>{user.felh_nemszeret}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

const styles = {
  content: {
    padding: '20px',
    textAlign: 'center',
  },
  table: {
    width: '80%',
    margin: '20px auto',
    borderCollapse: 'collapse',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  th: {
    border: '1px solid #ddd',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  td: {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
    backgroundColor: '#f9f9f9',
  },
  tr: {
    transition: 'background-color 0.3s',
  },
  trHover: {
    backgroundColor: '#f1f1f1',
  },
};

export default Users;