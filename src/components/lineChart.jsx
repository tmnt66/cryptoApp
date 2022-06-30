import React from "react";
import { Line } from "react-chartjs-2";
import {Col , Row , Typography} from 'antd'

const {Title} = Typography;

const LineChart = ({coinHistory , currentPrice , coinName})=>{
    return(
        <div>
       <Row className="chart-header">
        <Title level={2} className="chart-title">
            {coinName} Price Charts
        </Title>
       </Row>
        </div>
    )
}

export default LineChart