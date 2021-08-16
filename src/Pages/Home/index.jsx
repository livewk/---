import React, {Component} from 'react';
import { Row, Col } from 'antd';
import SalesAnalysis from "../../components/ContentHaXu/indexPage/SalesAnalysis";
import CommodityAnalysis from "../../components/ContentHaXu/indexPage/CommodityAnalysis";
import InventoryHaXu from "../../components/ContentHaXu/indexPage/InventoryHaXu";

export default class IndexPage extends Component {
    // 内容页
    render() {
        return (
            <Row>
                <Col span={8}><CommodityAnalysis/></Col>
                <Col span={8}><SalesAnalysis/></Col>
                <Col span={8}><InventoryHaXu/></Col>
            </Row>

        );
    }
}