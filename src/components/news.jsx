import React from "react";
import { Avatar, Card, Col, Row, Select, Typography } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const {Text  , Title} = Typography;
const {Option} = Select;


const News = ({simplified}) => {

const {data : cryptoNews} = useGetCryptoNewsQuery({newsCategory:'Cryptocurrency' , count : simplified ? 6:12})

console.log(cryptoNews)
console.log(useGetCryptoNewsQuery())

    return (
        <div>
            News
        </div>
    )
}

export default News