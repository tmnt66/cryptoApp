import React from 'react';
import { Routes, Route } from 'react-router';
import { Link } from "react-router-dom";
import { Layout, Typography, Space } from 'antd';
import './App.css';
import Navbar from "./components/navbar"
import Exchanges from './components/exchanges';
import Cryptocurrencies from './components/cryptocurrencies';
import News from './components/news';
import CryptoDetails from './components/cryptoDetails';
import Homepage from './components/homepage';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route exact path="//crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>

      <div className='footer'>
        <Typography.Title level={5} style={{ color: "white", textAlign: 'center' }}>
          Cryptoapp <br />
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/News">News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
