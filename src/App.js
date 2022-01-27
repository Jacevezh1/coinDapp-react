
import React from 'react';

/* Truco para importart components en una linea, creadno archivo index.js */
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, Cryptodetails, Navbar } from './components';
import './App.css';



const App = () => {
  return (

    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes> {/* Te permite tener multiples routes */}
                <Route exact path='/' element={<Homepage />} />
                <Route exact path='/exchanges' element={<Exchanges />} />
                <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
                <Route exact path='/crypto/:coinId' element={<Cryptodetails />} />
                <Route exact path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
      

      <div className='footer'>
        <Typography.Title level={5} style={{color: 'white', textAlign:'center'}}>
          CryptoDash <br/>
          All right reserved.
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/exchanges'>Exchanges</Link>
          <Link to='/news'>News</Link>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        </Space>
      </div> 
      </div> 
    </div>


  ) 
};

export default App;

