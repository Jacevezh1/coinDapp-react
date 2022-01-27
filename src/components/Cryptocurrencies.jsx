import React, {useState, useEffect} from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Homepage } from '.';



const Cryptocurrencies = ({   }) => { /* simplified el valor, llega por props, en el Homepage, pasamos ese simplified */
  
  
  const { data: cryptosList, isFetching } = useGetCryptosQuery()
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins); // Estado inicial, nos da acceso a la data
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
  
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase())) /* Nos permite buscar las crytps en el array de criptos */
    setCryptos(filteredData)
    
  }, [cryptosList, searchTerm]); /* Esta funcion se ejecuta cuando uno de estos valores createImageBitmap. */

  if (isFetching) return 'Loading...'
 

  return (
    <>
      
      <div className='search-crypto'>
          <Input placeholder='Search Cryptocurrency' onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
       <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >

            {/* Note: Change currency.id to currency.uuid  */}
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  ) 
};

export default Cryptocurrencies;
