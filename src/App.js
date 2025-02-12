import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Open from './Open';
import Users from './Users';
import Diagram from './Diagram';
import Login from './Login';
import Belepes from './Belepes';
import Rangok from './Rangok';
import RangokModosit from './RangokModosit';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/open" 
          element={
            <ProtectedRoute>
              <Open />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/users" 
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/diagram" 
          element={
            <ProtectedRoute>
              <Diagram />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Belepes" 
          element={
            <ProtectedRoute>
              <Belepes />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/Rangok" 
          element={
            <ProtectedRoute>
              <Rangok />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/RangokModosit" 
          element={
            <ProtectedRoute>
              <RangokModosit />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
