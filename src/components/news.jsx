import React, { useEffect } from "react";

import { Avatar, Card, Col, Row, Select, Typography } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import millify from "millify"
import { Link } from 'react-router-dom'
import {  Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useState } from "react";


const demoImage = 'https://www.bing.com/th?id=OVFT.FjfM--rI3Sqkj_Lh_qrTxi&pid=News'

const {Text  , Title} = Typography;
const {Option} = Select;


const News = ({simplified}) => {
    const { data } = useGetCryptosQuery(100);
const [newsCategory , setNewsCategory] = useState('cryptocurrency')

const {data : cryptoNews , isFetching} = useGetCryptoNewsQuery({newsCategory , count : simplified ? 6:12})
//fetching done sucessfully
// console.log(cryptoNews)


if (isFetching) return "Loading..."

return (
    <>
   
        <Row gutter={[24, 24]} >
            {!simplified && (
                <Col span={24}>
                    <Select
                    showSearch
                    className="select-news"
                    placeholder='Select a Crypto'
                    onChange={(value)=> setNewsCategory(value)}
                    filterOption={(input ,option)=>option.children.toLowerCase().indexOf(input.toLowerCase())>=0}>
                   <Option value="cryptocurrency">Cryptocurrency</Option>
                   {data?.data?.coins.map((coin)=><Option value={coin.name}>{coin.name}</Option>)}
                    </Select>
                </Col>
            )}
            {cryptoNews.value?.map((news, i) => (
                <Col key={i} xs={24} sm={12} lg={8} >
                 
                        <Card
                            className="news-card"
                            hoverable
                            key = {cryptoNews.value.indexOf(news)}
                        >
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title"
                                level={4}>{news.name}</Title>
                                <img style={{maxWidth:'200px',maxHeight:'200px'}} src={news?.image?.thumbnail.contentUrl||demoImage} alt="news" />
                            </div>
                            <p>
                                {news.description > 100?
                                `${news.description.subString(0,100)}...`
                            : news.description
                            }
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl||demoImage} alt = 'news'/>
                                    <Text className="provider-name">
                            {news.provider[0]?.name}
                                    </Text>
                                </div>
                                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                           
                        </Card>
                 
                </Col>
            ))}


        </Row>

    </>
)
}

export default News