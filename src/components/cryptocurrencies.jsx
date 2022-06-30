import React, { useEffect } from "react";
import millify from "millify"
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
// import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import { useState } from "react";

const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;

    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
    const [searchTerm , setSearchTerm] = useState([]);
    console.log(cryptosList?.data?.coins)
//  const { uuid } = cryptosList?.data?.coins;
//  console.log(uuid)


    useEffect(()=>{
        // setCryptos(cryptosList?.data?.coins);

         const filteredData = cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toString().toLowerCase()));
          
         setCryptos(filteredData);

    },[cryptosList,searchTerm]);

    if (isFetching) return "Loading..."

    return (
        <>
        {!simplified&&(
        <div className="search-crypto" onc>
            <Input placeholder="Search Cryptocurrency" onChange={(e)=> setSearchTerm(e.target.value)}/>
        </div>
        )}
            <Row gutter={[32, 32]} className="crpto-card-container">
                {cryptos?.map((currency) => (
                    <Col key={cryptos.indexOf(currency)} xs={24} sm={12} lg={6} className="crypto-card" >
                        <Link to={`/crypto/${cryptos.indexOf(currency)+1}`}>
                            <Card
                                title={`${currency.rank}.${currency.name}`}
                                extra={<img className="crypto-image" src={currency.iconUrl} alt="coin" />}
                                hoverable
                                key = {cryptos.indexOf(currency)}
                            >
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap : {millify(currency.marketCap)}</p>
                                <p>Daily Change : {millify(currency.change)}</p>
                            </Card>
                        </Link>
                    </Col>
                ))}


            </Row>

        </>
    )
}

export default Cryptocurrencies