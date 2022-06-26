import { Typography , Row ,Col} from "antd";
import React from "react";
import {Statistic} from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";

const {Title} = Typography;

const Homepage = ()=>{
const {data , isFetching} = useGetCryptosQuery();

console.log(data);

    return(
      <>
      <Title level={2} className="heading">Global Crypto Status</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value = "5" /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value = "5" /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value = "5" /></Col>
        <Col span={12}><Statistic title="Total Total 24hr Volume " value = "5" /></Col>
        <Col span={12}><Statistic title="Total Markets" value = "5" /></Col>
      </Row>
      
      
      </>
    )
}

export default Homepage